import { useState } from 'react';
import { calc } from './service';

function useCalculatorState() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('0');
  const [operationCalc, setOperation] = useState('');

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
      if (!isNaN(Number.parseFloat(operation))) {
        const oldValue = getVariable();
        const value = oldValue === '0' ? operation : oldValue + operation;
        setVariable(value);
      } else {
        const val = getVariable();
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
            if (val !== '0') {
              if (val.startsWith('-')) {
                setVariable(val.replace('-', ''));
              } else {
                setVariable('-' + val);
              }
            }
            break;
          case '%':
            setVariable((Number.parseFloat(val) / 100).toString());
            break;
          case '.':
            if (!val.includes(operation)) setVariable(val + operation);
            break;
          case '=':
            if (operationCalc !== '') {
              const result = await calc(
                Number.parseFloat(a),
                Number.parseFloat(b),
                operationCalc
              );
              setA(result.toString());
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
  return [a, b, operationCalc, calculateOperation];
}

export default useCalculatorState;
