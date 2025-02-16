import { addTodo } from "../addTodo";

interface ITodo {
    id: number;
    text: string;
    status: "active" | "done";
}

describe('addTodo', () => {
    it('должна добавлять таску', () => {
        const mockAddTodo = jest.fn(addTodo);

        const todos: ITodo[] = [];
        const textNewTodo = 'Test task 1';
        const updatedTodo = mockAddTodo(todos, textNewTodo);

        expect(updatedTodo).toContainEqual({id: 0, text: textNewTodo, status: 'active'});
        expect(updatedTodo).toHaveLength(1);
    
        expect(mockAddTodo).toHaveBeenCalledWith(todos, textNewTodo);
        expect(mockAddTodo).toHaveBeenCalledTimes(1);
        expect(mockAddTodo).toHaveReturnedWith([{id: 0, text: textNewTodo, status: 'active'}]);
    });
});