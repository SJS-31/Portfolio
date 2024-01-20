import React from "react";

const Circle = () => {
  const text = "Scroll Down - Scroll Down - "; // The text to be rotated
  const rotatedChars = text.split("").map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 12.86}deg)` }}>
      {char}
    </span>
  ));

  return (
    <div className="circle">
    <span>v</span>
      <div className="circle-text">
      
        {rotatedChars}
      </div>
    </div>
  );
};

export default Circle;
