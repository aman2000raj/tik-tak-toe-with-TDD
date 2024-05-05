function calculateWinnner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [posA, posB, posC] = lines[i];
    if (
      squares[posA] &&
      squares[posA] === squares[posB] &&
      squares[posA] === squares[posC]
    ) {
      return squares[posA];
    }
  }
  return null;
}
export default calculateWinnner;
