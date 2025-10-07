import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import SidebarMenu from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **SidebarMenu** component provides a collapsible side navigation panel that can contain one or multiple levels of menu items.  
It is commonly used in dashboards, admin panels, or any layout that requires structured navigation.  
Supports nested submenus, toggle animation, and customizable items.
        `,
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description:
        'Determines whether the sidebar is currently visible or hidden.',
    },
    items: {
      control: 'object',
      description:
        'An array of menu items. Each item can have a label and optionally contain a `children` array for nested submenus.',
    },
    onClose: {
      action: 'closed',
      description:
        'Callback function that is triggered when the sidebar is closed.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Playground: Story = {
  args: {
    isOpen: true,
    items: [
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
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
Interactive playground for testing the **SidebarMenu** component.  
You can expand/collapse submenus and see how multiple levels behave dynamically.  
Use controls to toggle the \`isOpen\` prop and modify the menu structure.
        `,
      },
    },
  },
};

export const OneLevel: Story = {
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
  parameters: {
    docs: {
      description: {
        story: `
A simple one-level sidebar menu example.  
All items are displayed in a single hierarchy without any nested submenus.  
Use this layout when navigation is flat and straightforward.
        `,
      },
    },
  },
};

export const TwoLevels: Story = {
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
  parameters: {
    docs: {
      description: {
        story: `
A sidebar menu with **two levels** of navigation.  
Submenus can be expanded or collapsed to reveal nested items.  
This configuration is ideal for dashboards or apps with structured sections (e.g. Projects → Frontend / Backend).
        `,
      },
    },
  },
};
