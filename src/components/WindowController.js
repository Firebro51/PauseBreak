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
            <img src={LogoIcon} alt="Logo" className="logo" />
            <div className="window-controls">
                <img src={MinimizeIcon} alt="Minimize" onClick={() => window.electronAPI.minimize()} />
                <img src={MaximizeIcon} alt="Maximize" onClick={() => window.electronAPI.maximize()} />
                <img src={CloseIcon} alt="Close" onClick={() => window.electronAPI.close()} />
            </div>
        </div>
    );
};

export default WindowController;
