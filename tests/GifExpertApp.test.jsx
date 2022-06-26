import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas sobre GifExpertApp Component', () => {
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar un h1 con el texto Gif Expert App', () => {
        const title = 'Gif Expert App';
        render(<GifExpertApp />);
        const h1 = screen.getByRole('heading', { name: title });
        expect(h1).toBeTruthy();
    });
});
