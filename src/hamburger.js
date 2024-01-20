import React, { useState, useRef } from "react";

function Hamburger() {

  const magnetRef = useRef(null);

  const handleMouseMove = (event) => {
    const magnet = magnetRef.current;
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const magWidth = magnet.clientWidth;
    const magHeight = magnet.clientHeight;
    const moveX = x - magWidth / 2;
    const moveY = y - magHeight / 2;
    magnet.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
  };

  const handleMouseOut = () => {
    const magnet = magnetRef.current;
    magnet.style.transform = '';
  };


  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(isClicked => !isClicked);
  };

  return (
    <div
      className={`hamburger magnet ${isClicked ? "hamburger-click" : ""}`}
      onClick={handleClick}
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <span id="middle-line" className="hamburger-line"></span>
    </div>
  );
}

export default Hamburger;
