import React from "react";
import "../styles/Landing.css";
import LessonsComponent from "./LessonsComponent";

const LandingComponent: React.FC = () => {
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

            <div className="start-button">start</div>
        </div>
        
        <LessonsComponent />
    </div>
  );
};

export default LandingComponent;
