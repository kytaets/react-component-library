import type { Meta, StoryObj } from '@storybook/nextjs';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description:
        'Specifies the input type that determines the data format (text, password, email, etc.).',
    },
    clearable: {
      control: 'boolean',
      description:
        'If true, displays a clear button to quickly reset the input value.',
    },
    placeholder: {
      control: 'text',
      description:
        'Hint text displayed inside the field before the user types.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Input** component is a reusable text field for user input.  
It supports multiple types (text, password, email, number, etc.) and can optionally include a clear button for better UX.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: { placeholder: 'Type something...', type: 'text', clearable: true },
  parameters: {
    docs: {
      description: {
        story: `
An interactive example that allows you to test different configurations of the Input component.  
Use the **Controls** panel in Storybook to adjust its props (type, placeholder, clearable, etc.).
        `,
      },
    },
  },
};

export const Text: Story = {
  args: { placeholder: 'Enter text', type: 'text', clearable: false },
  parameters: {
    docs: {
      description: {
        story:
          'A standard text input without a clear button. Suitable for basic text entry.',
      },
    },
  },
};

export const TextClearable: Story = {
  args: { placeholder: 'Enter text', type: 'text', clearable: true },
  parameters: {
    docs: {
      description: {
        story:
          'A text input with a clear button. Users can easily reset the field content.',
      },
    },
  },
};

export const Password: Story = {
  args: { placeholder: 'Enter password', type: 'password', clearable: false },
  parameters: {
    docs: {
      description: {
        story: 'A password field that masks the input for secure data entry.',
      },
    },
  },
};

export const PasswordClearable: Story = {
  args: { placeholder: 'Enter password', type: 'password', clearable: true },
  parameters: {
    docs: {
      description: {
        story:
          'A password input that includes a clear button to quickly reset the value.',
      },
    },
  },
};

export const Email: Story = {
  args: { placeholder: 'Enter email', type: 'email', clearable: true },
  parameters: {
    docs: {
      description: {
        story:
          'An email input optimized for entering valid email addresses. Includes a clear button for convenience.',
      },
    },
  },
};

export const Number: Story = {
  args: { placeholder: 'Enter number', type: 'number', clearable: true },
  parameters: {
    docs: {
      description: {
        story:
          'A numeric input field that allows only number values. Includes a clear button.',
      },
    },
  },
};
