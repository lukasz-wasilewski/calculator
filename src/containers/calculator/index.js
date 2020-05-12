import React from 'react';
import Button from '../../components/Button';
import Display from '../../components/Display';
import useCalculatorState from './calculatorHook';

function Calculator() {
	const [a, b, operationCalc, calculateOperation] = useCalculatorState();
	
	const onButtonClick = calculateOperation;
  return (
    <>
      <div>
        <Display a={a} b={b} operation={operationCalc} />
      </div>
      <div>
        <Button onClick={onButtonClick} value="C" />
        <Button onClick={onButtonClick} value="-/+" />
        <Button onClick={onButtonClick} value="%" />
        <Button onClick={onButtonClick} value="/" variant="primary" />
      </div>
      <div>
        <Button onClick={onButtonClick} value="9" />
        <Button onClick={onButtonClick} value="8" />
        <Button onClick={onButtonClick} value="7" />
        <Button onClick={onButtonClick} value="x" variant="primary" />
      </div>
      <div>
        <Button onClick={onButtonClick} value="6" />
        <Button onClick={onButtonClick} value="5" />
        <Button onClick={onButtonClick} value="4" />
        <Button onClick={onButtonClick} value="-" variant="primary" />
      </div>
      <div>
        <Button onClick={onButtonClick} value="3" />
        <Button onClick={onButtonClick} value="2" />
        <Button onClick={onButtonClick} value="1" />
        <Button onClick={onButtonClick} value="+" variant="primary" />
      </div>
      <div>
        <Button onClick={onButtonClick} value="0" size="xl" />
        <Button onClick={onButtonClick} value="." />
        <Button onClick={onButtonClick} value="=" variant="primary" />
      </div>
    </>
  );
}

export default Calculator;
