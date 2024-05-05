import React from 'react';
import Game from '../components/Game';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Game Component', () => {
  it('should render the initial game board', () => {
    render(<Game />);
    const { getByText, getAllByRole } = screen;
    //expect(getByText('Go to game start')).toBeInTheDocument();
    expect(getAllByRole('button', { name: '' })).toHaveLength(9);
  });

  it('should allow a player to make a move and update the board', () => {
    render(<Game />);
    const { getByTestId, getAllByRole } = screen;
    userEvent.click(getAllByRole('button', { name: '' })[0]);
    expect(getByTestId('next-player')).toBeInTheDocument();
  });

  it('should not allow a player o make a move on a filled square', () => {
    render(<Game />);
    const { getByTestId, getAllByRole } = screen;
    userEvent.click(getAllByRole('button', { name: '' })[0]);
    userEvent.click(getAllByRole('button', { name: '' })[0]);
    expect(getByTestId('next-player')).toBeInTheDocument();
  })
});
