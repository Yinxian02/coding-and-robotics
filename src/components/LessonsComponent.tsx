import React, { useState } from "react";
import "../styles/Lessons.css";

const TABS = {
  OVERVIEW: 0,
  SLIDES: 1,
  WORKSHEET: 2,
  REFERENCES: 3,
};

interface Lesson {
  title: string;
  image: string;
  thumbnail?: string;
  description: string;
  slide: string;
  worksheet: string;
  printables?: string[];
  materials?: string[];
  references?: { title?: string; url: string; logo?: string }[];
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

    const handleClosePopUp = () => {
      setPopupIndex(null);
      setActiveTab(TABS.OVERVIEW);  
    }

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
          <button className="close-button" onClick={handleClosePopUp}>
            &times;
          </button>
          <h1 className="popup-title">{lessonData[popupIndex].title}</h1>
          <div className="popup-content">

            {/* Tab Navigation */}
            <div className="tab-nav">
              <div
                className={`tab ${activeTab === TABS.OVERVIEW ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
              >
                Overview
              </div>
              <div
                className={`tab ${activeTab === TABS.SLIDES ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Slides
              </div>
              <div
                className={`tab ${activeTab === TABS.WORKSHEET ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Worksheet
              </div>
              <div
                className={`tab ${activeTab === TABS.REFERENCES ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                References
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === TABS.OVERVIEW && (
                <div className="tab-pane">
                  <img
                    src={lessonData[popupIndex].thumbnail}
                    alt={lessonData[popupIndex].title}
                    className="popup-img"
                  />
                  <div className="description-card">
                    <p>{lessonData[popupIndex].description}</p>
                  </div>
                </div>
              )}
               
              {activeTab === TABS.SLIDES && (
                <div className="tab-pane">
                  <div className="iframe-container">
                    <iframe
                      className="class-slides"
                      allow="fullscreen"
                      src={lessonData[popupIndex]?.slide}
                      title={lessonData[popupIndex].title}
                    ></iframe>
                  </div>
                </div>
              )}

              {activeTab === TABS.WORKSHEET && (
                <div className="tab-pane">
                  <iframe
                    className="worksheet"
                    src={lessonData[popupIndex]?.worksheet}
                    width="60%"
                    height="400px"
                    title="Worksheet Viewer"
                  ></iframe>
                </div>
              )}

              {activeTab === TABS.REFERENCES && (
                <div className="tab-pane">
                  <div className="references-container">
                    {lessonData[popupIndex]?.references?.map((reference, index) => (
                      <a
                        key={index}
                        href={reference.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reference-item"
                      >
                          <img
                            src={reference.logo}
                            alt={reference.logo || "reference"}
                            className="w-5 h-5 object-contain reference-icon"
                          />
                          <span>{reference.title}</span>
                      </a>
                    ))}
                  </div>
                  </div>)}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonsComponent;
