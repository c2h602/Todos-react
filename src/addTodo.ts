export function addTodo(todos: { id: number; text: string; status: string }[], text: string) {
    return [...todos, {id: todos.length, text, status: 'active'}];
}