import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-green-800 hover:bg-green-900 text-yellow-100 shadow-md hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-green-800 text-green-800 hover:bg-green-50',
    tertiary: 'bg-transparent text-green-800 hover:text-green-900 underline-offset-2 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;