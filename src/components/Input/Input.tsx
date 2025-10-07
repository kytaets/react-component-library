'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  clearable?: boolean;
}

export default function Input({
  type = 'text',
  clearable = false,
  ...props
}: InputProps) {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="relative inline-block">
      <input
        {...props}
        type={isPassword && showPassword ? 'text' : type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`border border-blue-300 border-2 rounded px-2 py-1 w-52 
    ${
      isPassword && clearable
        ? 'pr-14'
        : isPassword || clearable
        ? 'pr-8'
        : 'pr-2'
    } 
    focus:outline-none focus:border-blue-500 transition-colors duration-300`}
      />

      {clearable && value && (
        <button
          type="button"
          onClick={() => setValue('')}
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            isPassword ? 'right-8' : 'right-2'
          } text-gray-500 hover:text-gray-700`}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      )}

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute top-1/2 transform -translate-y-1/2 right-2
          text-gray-500 hover:text-gray-700`}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      )}
    </div>
  );
}
