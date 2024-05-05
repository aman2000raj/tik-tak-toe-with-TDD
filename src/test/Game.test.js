import React from 'react';
import Game from '../components/Game';
import { render, screen } from '@testing-library/react';

describe('Game Component', () => {
  it('should render the initial game board', () => {
    render(<Game />);
    const { getByText, getAllByRole } = screen;
    //expect(getByText('Go to game start')).toBeInTheDocument();
    expect(getAllByRole('button', { name: '' })).toHaveLength(9);
  });
});
