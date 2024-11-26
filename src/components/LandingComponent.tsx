import React, { useRef } from "react";
import "../styles/Landing.css";
import LessonsComponent from "./LessonsComponent";
import { lessonData } from "./lessonData";

const LandingComponent: React.FC = () => {
  const lessonsRef = useRef<HTMLDivElement | null>(null);

  const handleStartButtonClick = () => {
    if (lessonsRef.current) {
      lessonsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", 
      });
    }
  };

  return (
    <div className="main-container">
        <div className="landing-container">
            <img
            className="pc-logo"
            src="https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/pc.png"
            alt="pc rgb"
            />

            <div className="title-text">coding & robotics</div>

            <div className="website-description-card">
            Hello, welcome to the world of microbit programming! 🚀 Get ready to
            explore, create, and have loads of fun as you learn to code. 🎮
            </div>

            <div className="start-button" onClick={handleStartButtonClick}>start</div>
        </div>
        
        <div className="lessons-container" ref={lessonsRef}>
          <LessonsComponent lessonData={lessonData} />
        </div>
    </div>
  );
};

export default LandingComponent;
