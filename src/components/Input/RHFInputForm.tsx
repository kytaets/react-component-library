'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from './Input';

interface FormValues {
  username: string;
  password: string;
}

export default function RHFInputForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { username: '', password: '' },
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const onSubmit = () => setSubmitStatus('success');
  const onError = () => setSubmitStatus('error');

  return (
    <div className="space-y-4 p-4 max-w-sm">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
        <Controller
          name="username"
          control={control}
          rules={{ required: 'Username is required' }}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                type="text"
                placeholder="Enter username"
                clearable
              />
              {fieldState.error && (
                <p className="text-rose-400 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                type="password"
                placeholder="Enter password"
                clearable
              />
              {fieldState.error && (
                <p className="text-rose-400 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              setSubmitStatus(null);
            }}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>
      </form>

      {submitStatus === 'success' && (
        <div className="text-green-500 font-medium">
          Form submitted successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="text-rose-400 font-medium">
          Please fix the errors above and submit again.
        </div>
      )}
    </div>
  );
}
