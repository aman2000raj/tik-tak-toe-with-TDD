import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className='game'>
        <div className='game-board'>
          <Board xIsNext={xIsNext} squares={squares} onPlay={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Game;
