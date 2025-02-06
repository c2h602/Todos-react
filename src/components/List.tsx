import { useState, useMemo } from "react";
import Button from "./Button";
import Todo from "./Todo";

interface ITodo {
  id: number;
  text: string;
  status: "active" | "done";
}

interface ListProps {
  todos: ITodo[];
  filter: "all" | "active" | "done";
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
  onFilterChange: (filter: "all" | "active" | "done") => void;
}

export default function List({
  todos,
  filter,
  onAddTodo,
  onToggleTodo,
  onRemoveTodo,
  onFilterChange,
}: ListProps) {
  
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  const filteredTodos = useMemo(() => {
    
    console.log(`useMemo return the filter func`);

    return todos.filter((todo) => {
      if (filter === "all") return true;
      return todo.status === filter;
    });
  }, [todos, filter]);

  return (
    <>
      <div className="card">
        <div className="input__panel">
          <input
            className="input"
            value={newTodo}
            maxLength={36}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button className="addBtn" onClick={addTodo}>
            Add
          </Button>
        </div>

        {filteredTodos.length === 0 ? (
          <div>
            <h1 className="empty__text">✔</h1>
            <h2>You have no todos</h2>
            <h4>Sit back and relax</h4>
          </div>
        ) : (
          <ul className="card__list">
            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={onToggleTodo}
                onRemove={onRemoveTodo}
              ></Todo>
            ))}
          </ul>
        )}
      </div>

      <Button className="allBtn" onClick={() => onFilterChange("all")}>
        All
      </Button>
      <Button className="activeBtn" onClick={() => onFilterChange("active")}>
        Active
      </Button>
      <Button className="doneBtn" onClick={() => onFilterChange("done")}>
        Done
      </Button>
    </>
  );
}
