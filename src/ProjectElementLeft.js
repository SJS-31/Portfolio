import React from "react";

function ProjectElementLeft() {
  return (
    <div className="element-left">
      <div className="element-left-img">
        <img src="/blotic.jpg" alt="my img" />
        {/* <div></div> */}
      </div>
      <div className="element-left-img-content">
        <span>01.</span>
        <p className="element-heading">Blotic: Web3 Startup</p>
        <p className="element-work">Website, Marketing</p>
      </div>
    </div>
  );
}

export default ProjectElementLeft;
