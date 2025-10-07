import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
    clearable: false,
  },
};

export const TextClearable: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    clearable: false,
  },
};

export const PasswordClearable: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    clearable: true,
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email',
    type: 'email',
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Enter number',
    type: 'number',
    clearable: true,
  },
};
