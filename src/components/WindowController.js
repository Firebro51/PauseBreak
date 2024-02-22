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
                <div className="window-button minimize-btn" onClick={() => window.electronAPI.minimize()}>
                  <img src={MinimizeIcon} alt="Minimize" />
                </div>
                <div className="window-button maximize-btn" onClick={() => window.electronAPI.maximize()}>
                  <img src={MaximizeIcon} alt="Maximize" />
                </div>
                <div className="window-button close-btn" onClick={() => window.electronAPI.close()}>
                  <img src={CloseIcon} alt="Close" />
                </div>
            </div>
        </div>
    );
};

export default WindowController;
