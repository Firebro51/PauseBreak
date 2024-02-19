import React, { useState } from 'react';
import TitleBar from './components/TitleBar';
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
    <div className="App">
      <TitleBar
        title="Applications"
        onPowerClick={handlePowerClick}
        onThemeToggle={handleThemeToggle}
        powerOn={powerOn}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
