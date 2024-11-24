import React from "react";
import "./styles/Landing.css";

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
        
      
      <div className="lesson-container">
        <div className="lesson-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="lesson-box">
              <img
                className={`lesson-img lesson-img-${index + 1}`}
                src={`https://via.placeholder.com/${
                  index % 2 === 0 ? "200x166" : "273x146"
                }`}
                alt={`Lesson ${index + 1}`}
              />
              <div className="lesson-title">
                {[
                  "introduction to microbit programming",
                  "micropets",
                  "send a smile",
                  "microbit music",
                  "sports day",
                  "snake game",
                  "robot car",
                  "platform game",
                  "ottobot",
                ][index]}
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default LandingComponent;
