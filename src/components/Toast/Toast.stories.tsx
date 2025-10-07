import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import Toast, { ToastType } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Toast** component is a lightweight notification element used to display short, time-limited messages.  
It supports four message types: **success**, **error**, **warning**, and **info**.  
Toasts disappear automatically after a specified duration, but can also be manually dismissed by the user.
        `,
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The message displayed inside the toast notification.',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Defines the visual style and icon of the toast.',
    },
    duration: {
      control: 'number',
      description:
        'Duration (in milliseconds) before the toast automatically disappears.',
    },
    onClose: {
      description: 'Callback function triggered when the toast is closed.',
    },
  },
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

export const Playground: Story = {
  render: () => <ToastWrapper type="info" duration={3000} />,
  parameters: {
    docs: {
      description: {
        story: `
An interactive example that lets you experiment with different toast types and durations.  
Use the controls to modify props like \`type\` and \`duration\` to see how the toast behaves.
        `,
      },
    },
  },
};

export const Success: Story = {
  render: () => <ToastWrapper type="success" duration={3000} />,
  parameters: {
    docs: {
      description: {
        story:
          'A success toast — used to confirm that an action has completed successfully.',
      },
    },
  },
};

export const Error: Story = {
  render: () => <ToastWrapper type="error" duration={4000} />,
  parameters: {
    docs: {
      description: {
        story:
          'An error toast — indicates that something went wrong or an operation failed.',
      },
    },
  },
};

export const Warning: Story = {
  render: () => <ToastWrapper type="warning" duration={5000} />,
  parameters: {
    docs: {
      description: {
        story:
          'A warning toast — used to alert the user about potential issues or cautionary events.',
      },
    },
  },
};

export const Info: Story = {
  render: () => <ToastWrapper type="info" duration={2500} />,
  parameters: {
    docs: {
      description: {
        story:
          'An informational toast — used to share neutral, general-purpose information with the user.',
      },
    },
  },
};
