import React, { useState } from "react";
import Box from "./Box";

function TaoBox() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);

  const handleGenerate = () => {
    if (count <= 0) {
      setBoxes([]);
    } else {
      setBoxes(Array.from({ length: count }, (_, i) => i + 1));
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClickBox = (e) => {
    e.target.style.backgroundColor = getRandomColor();
  };

  return (
    <div>
      <label>Số lượng box: </label>
      <input
        type="number"
        min="0"
        max="128"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleGenerate}>Generate</button>

      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
        {boxes.length === 0 ? (
          <p>no box</p>
        ) : (
          boxes.map((num) => (
            <Box key={num} number={num} onClick={handleClickBox} />
          ))
        )}
      </div>
    </div>
  );
}

export default TaoBox;
