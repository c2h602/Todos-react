import Button from "./Button";

interface ITodo {
  id: number;
  text: string;
  status: "active" | "done";
}

interface TodoProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function Todo({ todo, onToggle, onRemove }: TodoProps) {
  return (
    <>
      <li className="item" onClick={() => onToggle(todo.id)}>
        {todo.status === "active" ? `⬜ ${todo.text}` : `✅ ${todo.text}`}
        <Button className="removeBtn" onClick={() => onRemove(todo.id)}>
          ✖
        </Button>
      </li>
    </>
  );
}
