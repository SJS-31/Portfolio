import React, { useRef } from "react";
import Hamburger from "./hamburger";

function Navbar() {
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
    magnet.style.transform = "";
  };

  return (
    <div className="navbar pt-5">
      <ul className="navbar-list">
        <li>
          <Hamburger />
        </li>
        <li
          className="my-name magnet"
          ref={magnetRef}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
        >
          <a href="#."> Swapnil J Singh...</a>

        </li>
      </ul>
      <div className="nav-menu-items">
        <ul className="menu-item-list">
          <li>
            <h1>Home.</h1>
          </li>
          <li>
            <h1>About Me.</h1>
          </li>
          <li>
            <h1>Skills.</h1>
          </li>
          <li>
            <h1>Work.</h1>
          </li>
          <li>
            <h1>Contact.</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
