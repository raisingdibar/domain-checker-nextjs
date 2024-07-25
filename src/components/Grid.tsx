// components/Grid.tsx
import Square from './Square';

const Grid: React.FC = () => {
  const gridSize = 5; // 5x5 grid

  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      squares.push(<Square key={i} />);
    }
    return squares;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 50px)`, gap: '5px' }}>
      {renderSquares()}
    </div>
  );
};

export default Grid;
