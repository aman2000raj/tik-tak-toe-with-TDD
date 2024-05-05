import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className='game'>
        <div className='game-board'>
          <Board squares={squares} />
        </div>
      </div>
    </>
  );
}

export default Game;
