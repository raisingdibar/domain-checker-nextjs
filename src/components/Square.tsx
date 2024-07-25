// components/Square.tsx
import { useState } from 'react';

const Square: React.FC = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div
      onClick={toggleColor}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: isRed ? 'red' : 'green',
        border: '1px solid black',
        cursor: 'pointer',
      }}
    ></div>
  );
};

export default Square;
