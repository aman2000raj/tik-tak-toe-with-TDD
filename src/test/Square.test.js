import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Square from '../components/Square';

describe('Square Component', () => {
  it('should render the initial value', () => {
    const { getByText } = render(<Square value='X' />);

    expect(getByText('X')).toBeInTheDocument();
  });

  it('should trigger the onSquareClick prop when clicked', () => {
    const mockOnSquareClick = vi.fn();
    const { getByText } = render(
      <Square value='0' onSquareClick={mockOnSquareClick} />
    );
    fireEvent.click(getByText('0'));

    expect(mockOnSquareClick).toHaveBeenCalledTimes(1);
  });
});
