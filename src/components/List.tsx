import { useState, useCallback } from "react";
import Button from "./Button";
import { useMemo } from "react";

interface ITodo {
  id: number;
  text: string;
  status: "active" | "done";
}

export default function List() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  const setAllFilter = useCallback(() => setFilter("all"), []);
  const setActiveFilter = useCallback(() => setFilter("active"), []);
  const setDoneFilter = useCallback(() => setFilter("done"), []);

  const addTodo = useCallback(() => {
    if (newTodo.trim() === "") return;

    const newTask: ITodo = {
      id: todos.length,
      text: newTodo.trim(),
      status: "active",
    };

    setTodos((todos) => [newTask, ...todos]);
    setNewTodo("");
  }, [newTodo]);

  const removeTodo = useCallback(
    (todoId: number) => {
      const updatedTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    [todos]
  );

  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === "all") return true;
  //   return todo.status === filter;
  // });

  const toggleStatus = useCallback((todoId: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) {
          if (todo.status === "active") return { ...todo, status: "done" };
          else {
            return { ...todo, status: "active" };
          }
        }

        return todo;
      })
    );
  }, []);

  // фильтрация с использованием useMemo

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
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button className="addBtn" onClick={addTodo}>
            Add
          </Button>
        </div>

        <ul className="card__list">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="item"
              onClick={() => {
                toggleStatus(todo.id);
              }}
            >
              {todo.status === "active" ? `⬜ ${todo.text}` : `✅ ${todo.text}`}

              <Button className="removeBtn" onClick={() => removeTodo(todo.id)}>
                ✖
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button className="allBtn" onClick={setAllFilter}>
        All
      </Button>
      <Button className="activeBtn" onClick={setActiveFilter}>
        Active
      </Button>
      <Button className="doneBtn" onClick={setDoneFilter}>
        Done
      </Button>
    </>
  );
}
