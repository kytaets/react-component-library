import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import Toast, { ToastType } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'This is a toast message!',
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      defaultValue: 'info',
    },
    duration: {
      control: { type: 'number', min: 1000, step: 500 },
      defaultValue: 3000,
    },
    onClose: {
      action: 'closed',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Playground: Story = {
  args: {
    message: 'Hello from Toast!',
    type: 'info',
    duration: 3000,
  },
  render: (args) => {
    const [show, setShow] = useState(true);

    return (
      <div>
        <button
          onClick={() => setShow(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        >
          Show Toast
        </button>
        {show && <Toast {...args} onClose={() => setShow(false)} />}
      </div>
    );
  },
};

const ToastWrapper = ({
  type,
  duration,
}: {
  type: ToastType;
  duration?: number;
}) => {
  const [show, setShow] = useState(true);
  return (
    <div>
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
    </div>
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
