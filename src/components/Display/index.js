import React from 'react';
import './index.css';

function Display({ a, b, operation }) {
  return (
    <div className="calculator-display">
      {operation === '' ? a : `${a} ${operation} ${b}`}
    </div>
  );
}

export default Display;
