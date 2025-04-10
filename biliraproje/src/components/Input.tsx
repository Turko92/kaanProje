import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type InputRef = {
  focus: () => void;
};

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<InputRef, InputProps>(({ label, error, type, ...props }, forwardedRef) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  // dışarıya focus fonksiyonu aç
  useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  // input type'ını ayarla (password için toggle)
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="relative">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        ref={inputRef}
        type={inputType}
        {...props}
        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[36px] text-sm text-blue-600 hover:underline"
        >
          {showPassword ? 'Gizle' : 'Göster'}
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

export default Input;

