// WindowController.js
import React from 'react';
import '../styles/WindowController.css';
import MaximizeIcon from '../images/Maximize.svg';
import MinimizeIcon from '../images/Minimize.svg';
import CloseIcon from '../images/Close.svg';
import LogoIcon from '../images/Cool_Bird_Logo.svg';

const WindowController = () => {
    return (
        <div className="window-controller">
            <div className="window-controller-left">
                <img src={LogoIcon} alt="Logo" className="logo" />
                <span className="app-name">PauseBreak</span>
            </div>
            <div className="window-controls">
                <img src={MinimizeIcon} alt="Minimize" className="minimize-btn" onClick={() => window.electronAPI.minimize()} />
                <img src={MaximizeIcon} alt="Maximize" className="maximize-btn" onClick={() => window.electronAPI.maximize()} />
                <img src={CloseIcon} alt="Close" className="close-btn" onClick={() => window.electronAPI.close()} />
            </div>
        </div>
    );
};

export default WindowController;
