import React from 'react';
import pcImg from './assets/pc.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div>
        <img src={pcImg} className="pc-rgb" alt="PC RGB" />
      </div>
      <h1 className='coding-and-robotics'>coding & robotics</h1>

      <div className="website-description-card">
        <p className="website-description">
          <code>
            Hello, welcome to the world of microbit programming! 🚀 Get ready to explore, create, and have loads of fun as you learn to code. 🎮
          </code>
        </p>
      </div>

      <button>
        start
      </button>
    </div>
  );
};

export default App;

