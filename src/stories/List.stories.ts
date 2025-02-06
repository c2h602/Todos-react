import List from "../components/List";
// import * as TodoStories from './Todo.stories';
import { fn } from '@storybook/test';

export const ActionsData = {
  onAddTodo: fn(),
  onToggleTodo: fn(),
  onRemoveTodo: fn(),
  onFilterChange: fn(),
};

export default {
    component: List,
    title: "List",
    tags: ['autodocs'],
    args: {
    ...ActionsData,
  },
};

export const Default = {
    args: {
        todos: [
          { id: '1', text: 'Task 1', status: 'active' },
          { id: '2', text: 'Task 2', status: 'done' },
        ],
        filter: 'all'
      },
}

export const Active = {
  args: {
    todos: [
      { id: '1', text: 'Task 1', status: 'active' },
      { id: '2', text: 'Task 2', status: 'done' },
    ],
    filter: 'active'
  }
}

export const Done = {
  args: {
    todos: [
      { id: '1', text: 'Task 1', status: 'active' },
      { id: '2', text: 'Task 2', status: 'done' },
    ],
    filter: 'done'
  }
}

export const Empty = {
    args: {
      todos: [],
    },
};