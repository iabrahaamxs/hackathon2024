import React from 'react';
import '../stylesheets/Button.css';

const Button = ({ variant, onClick, children }) => {
  const getClassNames = () => {
    switch (variant) {
      case 'primary':
        return 'button button-primary';
      case 'secondary':
        return 'button button-secondary';
      case 'outline':
        return 'button button-outline';
      default:
        return 'button';
    }
  };

  return (
      <button className={getClassNames()} onClick={onClick}>
        {children}
      </button>
  );
};

export default Button;
