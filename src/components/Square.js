import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <div className='square' onClick={onSquareClick}>
      {value ?? 0}
    </div>
  );
}

export default Square;
