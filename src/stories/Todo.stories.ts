import Todo from "../components/Todo";
import { fn } from '@storybook/test';
import "../App.css";

export const ActionsData = {
  onToggle: fn(),
  onRemove: fn(),
};

export default {
  component: Todo,
  title: "Todo",
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    todo: {
      id: '1',
      text: 'Test Todo',
      status: 'active',
    },
  },
};

export const Active = {
  args: {
    todo: {
      ...Default.args.todo,
      status: 'active',
    },
  },
};

export const Done = {
  args: {
    todo: {
      ...Default.args.todo,
      status: 'done',
    },
  },
};





