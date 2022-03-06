import React from 'react';
import './Input.css';

function Input({ label, error, ...rest }) {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input id={label} {...rest} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
