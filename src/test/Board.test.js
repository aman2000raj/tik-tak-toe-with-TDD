import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Board from '../components/Board';

describe('Board Compoent', () => {
  it('should render the board with squares', () => {
    const squares = Array(9).fill(null);
    render(<Board squares={squares} onPlay={vi.fn()} />);

    expect(screen.getAllByRole('button', { name: '' })).toHaveLength(9);
  });

  it('should call onPlay when a square is clicked', async () => {
    const mockOnPlay = vi.fn();
    const squares = Array(9).fill(null);
    render(<Board squares={squares} onPlay={mockOnPlay} />);

    fireEvent.click(screen.getAllByRole('button', { name: '' })[0]);

    expect(mockOnPlay).toHaveBeenCalledTimes(1);
  });

  it('should display the winner when a row is filled', () => {});
});
