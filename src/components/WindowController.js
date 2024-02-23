import React, { useState } from 'react';
import '../styles/WindowController.css';
import MaximizeIcon from '../images/Maximize.svg';
import MinimizeIcon from '../images/Minimize.svg';
import CloseIcon from '../images/Close.svg';
import LogoIcon from '../images/Cool_Bird_Logo.svg';

const WindowController = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (action) => {
        setActiveButton(action);
        // Call the electron API
        window.electronAPI[action]();
        // Reset active button after short delay to show click effect
        setTimeout(() => setActiveButton(''), 150);
    };

    return (
        <div className="window-controller">
            <div className="window-controller-left">
                <img src={LogoIcon} alt="Logo" className="logo" />
                <span className="app-name">PauseBreak</span>
            </div>
            <div className="window-controls">
                <div className={`window-button minimize-btn ${activeButton === 'minimize' ? 'clicked' : ''}`}
                     onClick={() => handleButtonClick('minimize')}>
                    <img src={MinimizeIcon} alt="Minimize" />
                </div>
                <div className={`window-button maximize-btn ${activeButton === 'maximize' ? 'clicked' : ''}`}
                     onClick={() => handleButtonClick('maximize')}>
                    <img src={MaximizeIcon} alt="Maximize" />
                </div>
                <div className={`window-button close-btn ${activeButton === 'close' ? 'clicked' : ''}`}
                     onClick={() => handleButtonClick('close')}>
                    <img src={CloseIcon} alt="Close" />
                </div>
            </div>
        </div>
    );
};

export default WindowController;
