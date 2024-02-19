import React from 'react';
import '../styles/TitleBar.css';
import PowerOnIcon from '../images/power-on-icon.svg';  // Path to power on icon
import PowerOffIcon from '../images/power-off-icon.svg'; // Path to power off icon
import SunIcon from '../images/sun-icon.svg';            // Path to sun icon (light mode)
import MoonIcon from '../images/moon-icon.svg';          // Path to moon icon (dark mode)

function TitleBar({ title, onPowerClick, onThemeToggle, powerOn, darkMode }) {
  return (
    <div className="title-bar">
      <img
        src={powerOn ? PowerOnIcon : PowerOffIcon}
        alt="Power"
        className="title-bar-icon"
        onClick={onPowerClick}
      />
      <span className="title-bar-title">{title}</span>
      <img
        src={darkMode ? MoonIcon : SunIcon}
        alt="Theme"
        className="title-bar-icon"
        onClick={onThemeToggle}
      />
    </div>
  );
}

export default TitleBar;
