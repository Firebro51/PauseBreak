import React, { useState } from 'react';
import TopBar from './components/TopBar';
import WindowController from './components/WindowController';
import Timer from './components/TimerLimitSet'; // Import Timer component
import './App.css';

function App() {
  const [powerOn, setPowerOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handlePowerClick = () => {
    setPowerOn(!powerOn);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App-border-wrapper">
      <div className={darkMode ? "App dark-mode" : "App"}>
        <WindowController />
        <TopBar
          title="Applications"
          onPowerClick={handlePowerClick}
          onThemeToggle={handleThemeToggle}
          powerOn={powerOn}
          darkMode={darkMode}
        />
        {powerOn && <Timer />} {/* Conditionally render the Timer component */}
      </div>
    </div>
  );
}

export default App;
