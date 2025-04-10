import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;