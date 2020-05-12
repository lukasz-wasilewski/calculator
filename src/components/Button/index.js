import React from 'react';
import './index.css';

function Button({ value, onClick, size, variant }) {
  const sizeClass = size ? `size--${size}` : 'size--md';
  const variantClass = variant ? variant : 'default';
  return (
    <button
      className={`calculator-button ${sizeClass} ${variantClass}`}
      onClick={onClick(value)}
    >
      {value}
    </button>
  );
}

export default Button;
