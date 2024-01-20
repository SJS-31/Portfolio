// import React, { useRef } from 'react';
// import { gsap } from 'gsap';

// function ProjectPic() {
//   const projectPicRef = useRef([]);
//   const projectDivRef = useRef(null);
//   var count = 0;

//   const handleNextProject = () => {
//     if (count < 4) {
//       count++;
//       // gsap.to(projectDivRef.current, { x: count * (-70), duration: 1, ease: 'power2.out' });
//       gsap.to(projectDivRef.current, { left: count * (-70) + '%', duration: 1, ease: 'power2.out', overwrite: 'auto' });

//       gsap.set(projectPicRef.current[count], { className: 'project-pic center-pic' });
//       gsap.set(projectPicRef.current[count - 1], { className: 'project-pic' });
//     }
//   };

//   const handlePrevProject = () => {
//     if (count > 0) {
//       count--;
//       // gsap.to(projectDivRef.current, { x: (count * -70) + 70, duration: 1, ease: 'power2.out' });
//       gsap.to(projectDivRef.current, { left: ((count * (-70))+70) + '%', duration: 1, ease: 'power2.out', overwrite: 'auto' });

//       gsap.set(projectPicRef.current[count], { className: 'project-pic center-pic' });
//       gsap.set(projectPicRef.current[count + 1], { className: 'project-pic' });
//     }
//   };

import React, {useRef} from "react";

function ProjectPic(){

    const projectPicRef = useRef([]);
    const projectDivRef = useRef(null);
    var count = 0;
    
    // var classCount = 1;

    const handleNextProject = (el) => {
      if(count<4){
        projectPicRef.current[count].classList.remove('center-pic');
        count++;
        projectPicRef.current[count].classList.add('center-pic');
        projectDivRef.current.style.left = `${count * (-70)}%`;
        // console.log(count);
      }
    }

    const handlePrevProject = () => {
      if(count>0){
        projectDivRef.current.style.left = `${(count * (-70)) + 70}%`;
        projectPicRef.current[count].classList.remove('center-pic');
        count--;
        projectPicRef.current[count].classList.add('center-pic');
        // console.log(count);
      }
    }
    // const magnetRef = useRef([]);

    // const handleMouseMove = (event) => {
    //   const magnet = magnetRef.current;
    //   const x = event.nativeEvent.offsetX;
    //   const y = event.nativeEvent.offsetY;
    //   const magWidth = magnet.clientWidth;
    //   const magHeight = magnet.clientHeight;
    //   const moveX = x - magWidth / 2;
    //   const moveY = y - magHeight / 2;
    //   magnet.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
    // };
  
    // const handleMouseOut = () => {
    //   const magnet = magnetRef.current;
    //   magnet.style.transform = "";
    // };

    // useEffect(() => {
    //     projectPicRef.current.forEach((element, index) => {
    //         if(element && element.current){
    //             element.style.left = `${50 - index * 70.5}%`
    //         }
    //     })
    // }, [])


    return(
      <div>
        <div className="project-div" ref={projectDivRef}>
          <div className="project-pic" ref={(element) => (projectPicRef.current[0] = element)}>
            <img className="project-pic1" src="/dribble-2.gif" alt="my img" />
            <span>
              <h3 >
                Blotic
              </h3>
              <p>Website, Marketing</p>
            </span>
          </div>

          <div className="project-pic" ref={(element) => (projectPicRef.current[1]= element)}>
            <img className="project-pic1" src="/simon.png" alt="my img" />
            <span>
              <h3>Blotic 2</h3>
              <p>Website, Marketing</p>
            </span>
          </div>

          <div className="project-pic" ref={(element)=> (projectPicRef.current[2] = element)}>
            <img className="project-pic1" src="/simon.png" alt="my img" />
            <span>
              <h3>Blotic 3</h3>
              <p>Website, Marketing</p>
            </span>
          </div>

          <div className="project-pic" ref={(element) => (projectPicRef.current[3] = element)}>
            <img className="project-pic1" src="/simon.png" alt="my img" />
            <span>
              <h3>Blotic 4</h3>
              <p>Website, Marketing</p>
            </span>
          </div>

          <div className="project-pic" ref={(element) => (projectPicRef.current[4]=element)}>
            <img className="project-pic1" src="/simon.png" alt="my img" />
            <span>
              <h3>Blotic 5</h3>
              <p>Website, Marketing</p>
            </span>
          </div>
          </div>
          <div className="project-buttons">
          <span>
            <div
              className="prev-arrow magnet"
              onClick={handlePrevProject}
              // ref={(element) => (magnetRef.current[0] = element)}
              // onMouseMove={handleMouseMove}
              // onMouseOut={handleMouseOut}
              // onMouseEnter={cursorHover}
              // onMouseLeave={cursorHoverRemove}
            ></div>
            <p>
              <span className="upper-no">1</span>/
              <span className="lower-no">4</span>
            </p>
            <div
              className="next-arrow magnet"
              onClick={handleNextProject}
              // ref={(element)=> (magnetRef.current[1] = element)}
              // onMouseMove={handleMouseMove}
              // onMouseOut={handleMouseOut}
              // onMouseEnter={cursorHover}
              // onMouseLeave={cursorHoverRemove}
            ></div>
          </span>
        </div>
      </div>
    )
}

export default ProjectPic;