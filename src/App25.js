import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'orangered';
    divRef.current.style.color = '#fff';

  };
  return (
    <div ref={divRef}>
      <p>Madhu Sudhan Reddy</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};