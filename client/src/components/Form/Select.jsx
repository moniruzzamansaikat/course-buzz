import React from 'react';
import './Select.css';

function Select({ label, name, error, options }) {
  return (
    <div className="select">
      <label htmlFor={label}>{label}</label>
      <select id={label} name={name}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Select;
