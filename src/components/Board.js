import React from 'react';
import Square from './Square';
import calculateWinnner from './calculateWinner';

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinnner(squares);
  let status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(idx) {
    if (squares[idx] || calculateWinnner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[idx] = 'X';
    } else {
      nextSquares[idx] = 'O';
    }

    onPlay(nextSquares);
  }
  return (
    <>
      <div data-testid='next-player' className='status'>
        {status}
      </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
