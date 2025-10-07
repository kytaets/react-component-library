import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import SidebarMenu from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    items: {
      control: 'object',
    },
    onClose: {
      action: 'closed',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Playground: Story = {
  args: {
    isOpen: true,
    items: [
      {
        label: 'Dashboard',
      },
      {
        label: 'fsdfsfs',

        children: [
          {
            label: 'Frontend',
          },
          {
            label: 'Backend',
          },
          {
            label: 'Mobile',
          },
        ],
      },
      {
        label: 'Settings',

        children: [
          {
            label: 'Account',
          },
          {
            label: 'Security',
          },
        ],
      },
    ],
  },
};

export const OneLevel: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Open Menu
        </button>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={[
            { label: 'Home' },
            { label: 'Profile' },
            { label: 'Settings' },
          ]}
        />
      </div>
    );
  },
};

export const TwoLevels: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Open Menu
        </button>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={[
            { label: 'Dashboard' },
            {
              label: 'Projects',
              children: [
                { label: 'Frontend' },
                { label: 'Backend' },
                { label: 'Mobile' },
              ],
            },
            {
              label: 'Settings',
              children: [{ label: 'Account' }, { label: 'Security' }],
            },
          ]}
        />
      </div>
    );
  },
};
