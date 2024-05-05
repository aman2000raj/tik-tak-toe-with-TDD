import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value ?? 0}
    </button>
  );
}

export default Square;
