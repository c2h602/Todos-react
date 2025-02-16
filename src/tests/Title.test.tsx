import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '../components/Title';

describe('Title', () => {
    it(`корректно рендерит заголовок 'todos'`, () => {
        const { container } = render(<Title text='todos'/>);
        expect(container).toMatchSnapshot();
        
        const elem = screen.getByText('todos');
        expect(elem).toBeInTheDocument();
    });
});
