import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Todo from "../components/Todo";

interface ITodo {
    id: number;
    text: string;
    status: "active" | "done";
}

describe('Todo', () => {
    const mockTodo: ITodo = {id: 0, text: 'Test task 1', status: 'active'};
    const onToggleMock = jest.fn();
    const onRemoveMock = jest.fn();

    it('корректно рендерит таску', () => {
        render(<Todo todo={mockTodo} onToggle={onToggleMock} onRemove={onRemoveMock} />)

        expect(screen.getByText('⬜ Test task 1').closest('li')).toBeInTheDocument();
        expect(screen.getByRole("button", { name: '✖' })).toBeInTheDocument();
    });

    it("вызывает onToggle при клике на таску", () => {
        const { rerender } = render(<Todo todo={mockTodo} onToggle={onToggleMock} onRemove={onRemoveMock} />);

        const elem = screen.getByRole("listitem");
        expect(elem).toHaveTextContent(/Test task 1/i);
    
        fireEvent.click(elem!); 

        rerender(<Todo todo={{ ...mockTodo, status: "done" }} onToggle={onToggleMock} onRemove={onRemoveMock} />);
    
        expect(screen.getByText('✅ Test task 1'));
        expect(onToggleMock).toHaveBeenCalledWith(0);
        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });
});