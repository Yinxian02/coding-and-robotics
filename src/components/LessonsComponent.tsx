// import React, { useState } from "react";
import "../styles/Lessons.css";

const LessonsComponent = () => {
//   const [popupIndex, setPopupIndex] = useState(null);

  const lessonData = [
    {
      title: "Introduction to Microbit Programming",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/microbit.png",
      description: "Learn the basics of micro:bit programming.",
    },
    {
      title: "MicroPets",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.1/blue.dino.side.png",
      description: "Create your own electronic pet.",
    },
    {
      title: "Send a Smile",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/red.dino.front.png",
      description: "Send a smile to your friend using radio.",
    },
    {
      title: "Microbit Music",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/vinyl.png",
      description: "Make tunes with your microbit.",
    },
    {
      title: "Sports Day",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/trophy.png",
      description: "Develop games for sports day activities.",
    },
    {
      title: "Snake Game",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.1/nintendo.png",
      description: "Code a classic snake game.",
    },
    {
      title: "Robot Car",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.1/car.png",
      description: "Program a micro:bit-powered robot car.",
    },
    {
      title: "Platform Game",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.1/keyboard.png",
      description: "Build your own platformer game.",
    },
    {
      title: "Ottobot",
      image: "https://github.com/Yinxian02/coding-and-robotics-assets-repo/releases/download/v1.0.0/ottobot.png",
      description: "Program a dancing robot called Ottobot.",
    },
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-grid">
        {lessonData.map((lesson, index) => (
          <div
            key={index}
            className="lesson-box"
            // onClick={() => setPopupIndex(index)}
          >
            <img
              className={"lesson-img"}
              src={lesson.image}
              alt={`Lesson ${index + 1}`}
            />
            <div className="lesson-title">{lesson.title}</div>
          </div>
        ))}
      </div>

      {/* {popupIndex !== null && (
        <div className="popup">
          <div className="popup-content">
            <button
              className="close-button"
              onClick={() => setPopupIndex(null)}
            >
              &times;
            </button>
            <h2>{lessonData[popupIndex].title}</h2>
            <img
              src={lessonData[popupIndex].image}
              alt={lessonData[popupIndex].title}
              className="popup-img"
            />
            <p>{lessonData[popupIndex].description}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default LessonsComponent;
