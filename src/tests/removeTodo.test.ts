import { removeTodo } from "../removeTodo";

interface ITodo {
    id: number;
    text: string;
    status: "active" | "done";
}

describe('removeTodo', () => {
    it("должна удалять таску", () => {
        const mockRemoveTodo = jest.fn(removeTodo);

        const todos: ITodo[] = [
            { id: 0, text: "Test task 1", status: "active" },
            { id: 1, text: "Test task 2", status: "done" },
        ];

        const updatedTodo = mockRemoveTodo(todos, 1);
        
        // проверка на содержание объекта
        expect(updatedTodo).toContainEqual({ id: 0, text: "Test task 1", status: "active" });
    
        // проверка на длину массива
        expect(updatedTodo).toHaveLength(1);
    
        // проверка того, что объект удален
        expect(updatedTodo).not.toContainEqual({ id: 1, text: "Test task 2", status: "done" });

        expect(mockRemoveTodo).toHaveBeenCalledWith(todos, 1);
        expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
        expect(mockRemoveTodo).toHaveReturnedWith([{ id: 0, text: "Test task 1", status: "active" }]);
    });
})
