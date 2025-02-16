export function toggleTodoStatus(todos: { id: number; text: string; status: string }[], id: number) {
     return todos.map((todo) => {
        if (todo.id === id) {
          if (todo.status === "active") return { ...todo, status: "done" };
          else {
            return { ...todo, status: "active" };
          }
        }

        return todo;
      })
}