import { useState } from 'react';
import { calc } from './service';

const NAN_RESULT = 'NaN';

function useCalculatorState() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('0');
  const [operationCalc, setOperation] = useState('');
  const [error, setError] = useState(null);

  const getVariable = () => {
    if (operationCalc !== '') {
      return b;
    } else {
      return a;
    }
  };

  const setVariable = (newVal) => {
    if (operationCalc !== '') {
      setB(newVal);
    } else {
      setA(newVal);
    }
  };

  const calculateOperation = (operation) => {
    return async () => {
      const oldValue = getVariable();
      if (error === NAN_RESULT) {
        setError(null);
      }

      if (!isNaN(Number.parseFloat(operation))) {
        const value = oldValue === '0' ? operation : oldValue + operation;
        setVariable(value);
      } else {
        switch (operation) {
          case 'C':
            if (b !== '0') {
              setB('0');
            } else if (operationCalc !== '') {
              setOperation('');
            } else {
              setA('0');
            }
            break;
          case '-/+':
            if (oldValue !== '0') {
              if (oldValue.startsWith('-')) {
                setVariable(oldValue.replace('-', ''));
              } else {
                setVariable('-' + oldValue);
              }
            }
            break;
          case '%':
            setVariable((Number.parseFloat(oldValue) / 100).toString());
            break;
          case '.':
            if (!oldValue.includes(operation)) {
              setVariable(oldValue + operation);
            }
            break;
          case '=':
            if (operationCalc !== '') {
              const result = await calc(
                Number.parseFloat(a),
                Number.parseFloat(b),
                operationCalc
              );
              if (result !== null && !isNaN(result)) {
                setA(result.toString());
              } else {
                setA('0');
                setError(NAN_RESULT);
              }
              setOperation('');
              setB('0');
            }

            break;
          default:
            setOperation(operation);
            break;
        }
      }
    };
  };
  return [a, b, operationCalc, calculateOperation, error];
}

export default useCalculatorState;
