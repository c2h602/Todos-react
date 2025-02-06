import { Meta } from '@storybook/react';
import { ComponentProps } from "react";
import Button from "../components/Button";
import { fn } from '@storybook/test';

import { StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  title: 'Button',
  args: {
    children: 'Button',
    onClick: fn(),
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const Add: Story = {
  args: {
    className: 'addBtn',
    children: 'Add',
  }
}

export const All: Story = {
  args: {
    className: 'allBtn',
    children: 'All',
  }
}

export const Active: Story = {
  args: {
    className: 'activeBtn',
    children: 'Active',
  }
}

export const Done: Story = {
  args: {
    className: 'doneBtn',
    children: 'Done',
  }
}

export const Remove: Story = {
  args: {
    className: 'removeBtn',
    children: '✖',
  }
}



