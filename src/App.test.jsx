import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders el componente App', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { name: /vite \+ react/i });
    expect(titleElement).toBeInTheDocument();
  });
});