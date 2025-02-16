export function removeTodo(todos: { id: number }[], id: number) {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    return updatedTodo;
};