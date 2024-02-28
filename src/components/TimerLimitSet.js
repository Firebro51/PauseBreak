// src/components/Timer.js
import React, { useState } from 'react';
import '../styles/TimerLimitSet.css';

const degreesToRadians = (deg) => (deg * Math.PI) / 180;
const radiansToDegrees = (rad) => (rad * 180) / Math.PI;
const maxTimeForUnits = {
  days: 7,
  hours: 24,
  minutes: 60,
  seconds: 60,
};

const TimerCircle = ({ unit, time, setTime, color }) => {
  const maxTime = maxTimeForUnits[unit];
  const radius = 54; // Radius of the circle
  const strokeWidth = 12; // Width of the stroke for the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  const calculateTimeFromAngle = (angle) => {
    const time = Math.round((angle / 360) * maxTime);
    return time;
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();

    const onMouseMove = (moveEvent) => {
      const x = moveEvent.clientX - rect.left - rect.width / 2;
      const y = moveEvent.clientY - rect.top - rect.height / 2;
      let angle = radiansToDegrees(Math.atan2(y, x)) + 90;
      if (angle < 0) {
        angle += 360; // Normalize the angle
      }

      const newTime = calculateTimeFromAngle(angle);
      setTime(newTime);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const angle = (360 / maxTime) * time;
  const ballPosition = {
    x: 60 + radius * Math.cos(degreesToRadians(angle)),
    y: 60 + radius * Math.sin(degreesToRadians(angle)),
  };
  const strokeDashoffset = circumference - (time / maxTime) * circumference;

  return (
    <div className="timer-circle-container">
      <svg
        className="timer-svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        onMouseDown={handleMouseDown}
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#333"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
        <circle
          cx={ballPosition.x}
          cy={ballPosition.y}
          r="8"
          fill={color}
          style={{ cursor: 'pointer' }}
        />
      </svg>
      <div className="time-text">{time} {unit.toUpperCase()}</div>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setTimeForUnit = (unit, newTime) => {
    setTime({ ...time, [unit]: newTime });
  };

  return (
    <div className="timer-container">
      {Object.keys(maxTimeForUnits).map((unit) => (
        <TimerCircle
          key={unit}
          unit={unit}
          time={time[unit]}
          setTime={(newTime) => setTimeForUnit(unit, newTime)}
          color={unit === 'days' ? 'white' : unit === 'hours' ? 'pink' : unit === 'minutes' ? 'orange' : 'green'}
        />
      ))}
    </div>
  );
};

export default Timer;
