import React from 'react';
import './index.css';

function Display({ a, b, operation, error }) {
  if (error) {
    return <div className="calculator-display">{error}</div>;
  }
  return (
    <div className="calculator-display">
      {operation === '' ? a : `${a} ${operation} ${b}`}
    </div>
  );
}

export default Display;
