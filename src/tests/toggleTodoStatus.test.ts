import { toggleTodoStatus } from "../toggleTodoStatus";

interface ITodo {
    id: number;
    text: string;
    status: "active" | "done";
}

describe('toggleTodoStatus', () => {
    it('должна переключать статус таски', () => {
        const mockToggleTodoStatus = jest.fn(toggleTodoStatus);

        const todos: ITodo[] = [
            { id: 0, text: "Test task 1", status: "active" }
        ];
    
        const updatedTodo = mockToggleTodoStatus(todos, 0);
    
        expect(updatedTodo[0].status).toBe('done');
        expect(updatedTodo).toContainEqual({ id: 0, text: "Test task 1", status: "done" });
        expect(updatedTodo).toHaveLength(1);

        expect(mockToggleTodoStatus).toHaveBeenCalledWith(todos, 0);
        expect(mockToggleTodoStatus).toHaveBeenCalledTimes(1);
        expect(mockToggleTodoStatus).toHaveReturnedWith([{ id: 0, text: "Test task 1", status: "done" }]);
    });
})
