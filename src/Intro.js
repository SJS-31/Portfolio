import React, { useRef } from "react";
import { gsap } from "gsap";

function Intro() {
  
  // const circle2Ref = useRef(null);
  // const circle3Ref = useRef(null);
  // const circle4Ref = useRef(null);
  const circleSvgRef = useRef(null);
  const circleRef = useRef([]);
  const enterRef = useRef(null);

  const hoverRotation = (el) => {
    gsap.to(enterRef.current, {
      duration: 0.5,
      scale: 1.5,
      ease: "expo",
    });

    gsap.to(circleRef.current, {
      duration: 1,
      ease: "expo",
      scale: 1.15,
      rotation: (i) => (i % 2 ? "-=90" : "+=90"),
      transformOrigin: 'center',
      opacity: 0.4,
    });
  };

  const hoverRemove = (el) => {
    gsap.to(enterRef.current, {
      duration: 0.5,
      scale: 1,
      ease: "expo",
    });

    gsap.to(circleRef.current, {
      // duration: 1.5,
      // ease: "Elastic.easeInOut",
      scale: 1,
      // rotation: (i) => (i % 2 ? "+=120" : "-=120"),
      transformOrigin: 'center',
      opacity: 1,
      duration: 4,
                ease: 'power4',
                rotation: (i) => (i % 2 ? "-=180" : "+=180"),
      stagger: {
        amount: -0.3,
      },
    });
  };

  return (
    <div className="demo-3 loading">
      <div className="svg-div">
        <div className="svg-div-2"></div>
        <div className="svg-div-3">
          <svg
            className="circles-svg"
            // width="100%" height="100%"
            viewBox="0 0 1400 1400"
            ref={circleSvgRef}
          >
            <defs>
              <path
                id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
              />
              <path
                id="circle-2"
                d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
              />
              <path
                id="circle-3"
                d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
              />
              <path
                id="circle-4"
                d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
              />
            </defs>
            <text
              className="circles-text circles-text-1"
              ref={(element) => (circleRef.current[0] = element)}
            >
              <textPath
                className="circles-text-path"
                href="#circle-1"
                aria-label=""
                textLength="2830"
              >
                Let    life begin I've cleansed all my sins&nbsp;
              </textPath>
            </text>
            <text
              className="circles-text circles-text-2"
              ref={(element) => (circleRef.current[1] = element)}
            >
              <textPath
                className="circles-text-path"
                href="#circle-2"
                aria-label=""
                textLength="2001"
              >
                Burn all the money absolve all the lies&nbsp;
              </textPath>
            </text>
            <text
              className="circles-text circles-text-3"
              ref={(element) => (circleRef.current[2] = element)}
            >
              <textPath
                className="circles-text-path"
                href="#circle-3"
                aria-label=""
                textLength="1341"
              >
                We are caged in simulations
                {/* 7505573762 xviixixzcxi daynite */}
                &nbsp;
              </textPath>
            </text>
            <text
              className="circles-text circles-text-4"
              ref={(element) => (circleRef.current[3] = element)}
            >
              <textPath
                className="circles-text-path"
                href="#circle-4"
                aria-label=""
                textLength="836"
              >
                But something has changed in us&nbsp;
              </textPath>
            </text>
          </svg>
        </div>

        
        <a href="/App"
          onMouseOver={hoverRotation}
          onMouseOut={hoverRemove}
          className="enter-btn-container"
        >
          <div className="enter-bg-btn" ref={enterRef}></div>
          <span className="enter-text-btn">Enter</span>
        </a>
        
      </div>
    </div>
  );
}

export default Intro;
