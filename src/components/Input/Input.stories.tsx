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
      defaultValue: 'text',
    },
    clearable: {
      control: 'boolean',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter text...',
    },
    value: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    placeholder: 'Type something...',
    type: 'text',
    clearable: true,
  },
};

export const Text: Story = {
  args: { placeholder: 'Enter text', type: 'text', clearable: false },
};

export const TextClearable: Story = {
  args: { placeholder: 'Enter text', type: 'text', clearable: true },
};

export const Password: Story = {
  args: { placeholder: 'Enter password', type: 'password', clearable: false },
};

export const PasswordClearable: Story = {
  args: { placeholder: 'Enter password', type: 'password', clearable: true },
};

export const Email: Story = {
  args: { placeholder: 'Enter email', type: 'email', clearable: true },
};

export const Number: Story = {
  args: { placeholder: 'Enter number', type: 'number', clearable: true },
};
