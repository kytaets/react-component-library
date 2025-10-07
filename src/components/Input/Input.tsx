'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            key={type}
            {...props}
            type={isPassword && showPassword ? 'text' : type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-white rounded px-2 py-1 w-52 
            ${
              isPassword && clearable
                ? 'pr-14'
                : isPassword || clearable
                ? 'pr-8'
                : 'pr-2'
            } 
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {clearable && value && (
          <motion.button
            key="clear"
            type="button"
            onClick={() => setValue('')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isPassword ? 'right-8' : 'right-2'
            } text-gray-500 hover:text-gray-600 cursor-pointer`}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPassword && (
          <motion.button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 hover:text-gray-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              key={showPassword ? 'eye-slash' : 'eye'}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
