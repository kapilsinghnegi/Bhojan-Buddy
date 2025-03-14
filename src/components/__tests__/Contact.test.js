import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact Component Testcases', () => {
  it('Renders two headings in Contact component', () => {
    render(<Contact />);
    const headings = screen.getAllByRole('heading');
    // Assertion
    expect(headings.length).toBe(2);
  });
  it('Renders three textbox in Contact component', () => {
    render(<Contact />);
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes.length).toBe(3);
  });
  it('Renders button in Contact component', () => {
    render(<Contact />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
