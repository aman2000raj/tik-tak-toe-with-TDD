import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../components/Board';

describe('Board Compoent', () => {
  it('should render the board with squares', () => {
    const squares = Array(9).fill(null);
    render(<Board squares={squares} onPlay={vi.fn()} />);

    expect(screen.getAllByRole('button', { name: '' })).toHaveLength(9);
  });

  it('should call onPlay when a square is clicked', async () => {});

  it('should display the winner when a row is filled', () => {});
});
