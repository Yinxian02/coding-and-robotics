import React, { useState } from "react";
import "../styles/Lessons.css";

interface Lesson {
  title: string;
  image: string;
  description: string;
  slide: string;
}

interface LessonContainerProps {
  lessonData: Lesson[];
}

const LessonsComponent: React.FC<LessonContainerProps> = ({ lessonData }) => {
    const [popupIndex, setPopupIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };

  return (
    <div className="lesson-container">
      <div className="lesson-grid">
        {lessonData.map((lesson, index) => (
          <div
            key={index}
            className="lesson-box"
            onClick={() => setPopupIndex(index)}
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

      {popupIndex !== null && (
        <div className="popup">
          <button className="close-button" onClick={() => setPopupIndex(null)}>
            &times;
          </button>
          <h1 className="popup-title">{lessonData[popupIndex].title}</h1>
          <div className="popup-content">

            {/* Tab Navigation */}
            <div className="tab-nav">
              <div
                className={`tab ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
              >
                Overview
              </div>
              <div
                className={`tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Materials
              </div>
              <div
                className={`tab ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Slides


              </div>
              <div
                className={`tab ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Worksheet
              </div>
              <div
                className={`tab ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)}
              >
                References
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 0 && (
                <div className="tab-pane">
                  <h2>{lessonData[popupIndex].title}</h2>
                  <img
                    src={lessonData[popupIndex].image}
                    alt={lessonData[popupIndex].title}
                    className="popup-img"
                  />
                  <p>{lessonData[popupIndex].description}</p>
                </div>
              )}

              {activeTab === 1 && (
                <div className="tab-pane">
                </div>
                )}

               
              {activeTab === 2 && (
                <div className="tab-pane">
                  <div className="iframe-container">
                    <iframe
                      className="responsive-iframe"
                      allow="fullscreen"
                      src={lessonData[popupIndex]?.slide}
                      title={lessonData[popupIndex].title}
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonsComponent;
