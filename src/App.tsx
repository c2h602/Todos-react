import "./App.css";
import List from "./components/List";
import Title from "./components/Title";
import { useState } from "react";

interface ITodo {
  id: number;
  text: string;
  status: "active" | "done";
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length, text, status: "active" }]);
  };

  const toggleTodoStatus = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.status === "active") return { ...todo, status: "done" };
          else {
            return { ...todo, status: "active" };
          }
        }

        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  return (
    <>
      <Title text="todos"></Title>

      <List
        todos={todos}
        filter={filter}
        onAddTodo={addTodo}
        onToggleTodo={toggleTodoStatus}
        onRemoveTodo={removeTodo}
        onFilterChange={setFilter}
      />
    </>
  );
}
