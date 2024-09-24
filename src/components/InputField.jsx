import React from 'react';
import '../stylesheets/InputField.css';

const InputField = ({ id, label, type = 'text', className = '' }) => {
  return (
      <div className={`input-container ${className}`}>
        <input type={type} id={id} placeholder=" " />
        <label htmlFor={id}>{label}</label>
      </div>
  );
};

export default InputField;