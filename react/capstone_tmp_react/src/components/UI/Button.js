import React from 'react';
// import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  type = 'button',
  onClick,
  className = '',
  ...props 
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${loading ? 'btn-loading' : ''} ${className}`;
  
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner">⏳</span>}
      {children}
    </button>
  );
};

export default Button;