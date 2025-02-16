import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "../components/Button";

describe('Button', () => {
    it('корректно рендерится с текстом', () => {
        render(<Button onClick={() => {}} className="test__class">Test button</Button>);

        const elem = screen.getByRole('button')
        expect(elem).toBeInTheDocument();
    });

    it('вызывает onClick при клике', () => {
        const onClickMock = jest.fn();

        render(<Button onClick={onClickMock} className="test__class">Test button</Button>);
        fireEvent.click(screen.getByText(/test button/i));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("имеет переданный className", () => {
        render(<Button onClick={() => {}} className="test__class">Test button</Button>);
    
        const elem = screen.getByRole("button");
        expect(elem).toHaveClass("test__class");
      });
})