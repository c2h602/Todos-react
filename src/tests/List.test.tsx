import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";

interface ITodo {
  id: number;
  text: string;
  status: "active" | "done";
}

describe("List", () => {
  const todos: ITodo[] = [
    { id: 0, text: "Test task 1", status: "active" },
    { id: 1, text: "Test task 2", status: "done" },
  ];

  const onAddTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  const onRemoveTodoMock = jest.fn();
  const onFilterChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("корректно рендерит список задач", () => {
    render(
      <List
        todos={todos}
        filter="all"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(
      screen.getByText("⬜ Test task 1").closest("li")
    ).toBeInTheDocument();
    expect(
      screen.getByText("✅ Test task 2").closest("li")
    ).toBeInTheDocument();
  });

  it("отображает пустое состояние, если задач нет", () => {
    render(
      <List
        todos={[]}
        filter="all"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    expect(screen.getByText("✔")).toBeInTheDocument();
    expect(screen.getByText("You have no todos")).toBeInTheDocument();
    expect(screen.getByText("Sit back and relax")).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("вызывает onAddTodo при добавлении новой задачи", () => {
    render(
      <List
        todos={[]}
        filter="all"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "Test task 1" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(onAddTodoMock).toHaveBeenCalledWith("Test task 1");
    expect(onAddTodoMock).toHaveBeenCalledTimes(1);
  });

  it("фильтрует задачи по статусу", () => {
    const { rerender } = render(
      <List
        todos={todos}
        filter="all"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    expect(
      screen.getByText("⬜ Test task 1").closest("li")
    ).toBeInTheDocument();
    expect(
      screen.getByText("✅ Test task 2").closest("li")
    ).toBeInTheDocument();

    rerender(
      <List
        todos={todos}
        filter="active"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    expect(
      screen.getByText("⬜ Test task 1").closest("li")
    ).toBeInTheDocument();
    expect(screen.queryByText("✅ Test task 2")).not.toBeInTheDocument();

    rerender(
      <List
        todos={todos}
        filter="done"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    expect(screen.queryByText("⬜ Test task 1")).not.toBeInTheDocument();
    expect(
      screen.getByText("✅ Test task 2").closest("li")
    ).toBeInTheDocument();
  });

  it("вызывает onFilterChange при клике на кнопки фильтрации", () => {
    render(
      <List
        todos={todos}
        filter="all"
        onAddTodo={onAddTodoMock}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
        onFilterChange={onFilterChangeMock}
      />
    );

    const activeButton = screen.getByText("Active");
    fireEvent.click(activeButton);
    expect(onFilterChangeMock).toHaveBeenCalledWith("active");

    const doneButton = screen.getByText("Done");
    fireEvent.click(doneButton);
    expect(onFilterChangeMock).toHaveBeenCalledWith("done");

    const allButton = screen.getByText("All");
    fireEvent.click(allButton);
    expect(onFilterChangeMock).toHaveBeenCalledWith("all");

    expect(onFilterChangeMock).toHaveBeenCalledTimes(3);
  });
});
