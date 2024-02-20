import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import './App.css';

function App() {
  const [powerOn, setPowerOn] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const handlePowerClick = () => {
    setPowerOn(!powerOn);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App-border-wrapper">
        <div className="App">
          <TopBar
              title="Applications"
              onPowerClick={handlePowerClick}
              onThemeToggle={handleThemeToggle}
              powerOn={powerOn}
              darkMode={darkMode}
            />
      </div>
    </div>
  );
}

export default App;
