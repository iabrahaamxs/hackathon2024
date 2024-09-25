import React, { useState } from 'react';
import '../stylesheets/InputField.css';

const InputField = ({ id, label, value, type = 'text', className = '', onChange, suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState(value);

  const handleChange = (e) => {
    const userInput = e.currentTarget.value;
    const filtered = suggestions.filter(
        suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setUserInput(userInput);
    onChange(e);
  };

  const handleClick = (e) => {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
    onChange({ target: { value: e.currentTarget.innerText } });
  };

  return (
      <div className={`input-container ${className}`}>
        <input
            type={type}
            id={id}
            placeholder=" "
            value={userInput}
            onChange={handleChange}
        />
        <label htmlFor={id}>{label}</label>
        {showSuggestions && userInput && (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => (
                  <li key={index} onClick={handleClick}>
                    {suggestion}
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default InputField;
