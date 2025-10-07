import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import Toast, { ToastType } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

const ToastWrapper = ({
  type,
  duration,
}: {
  type: ToastType;
  duration?: number;
}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        Show {type} Toast
      </button>
      {show && (
        <Toast
          message={`This is a ${type} toast!`}
          type={type}
          duration={duration}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export const Success: Story = {
  render: () => <ToastWrapper type="success" duration={3000} />,
};

export const Error: Story = {
  render: () => <ToastWrapper type="error" duration={4000} />,
};

export const Warning: Story = {
  render: () => <ToastWrapper type="warning" duration={5000} />,
};

export const Info: Story = {
  render: () => <ToastWrapper type="info" duration={2500} />,
};
