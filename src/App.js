import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timerID;

    if (timerRunning) {
      timerID = setTimeout(() => {
        setMilliseconds(milliseconds + 10);
      }, 10);
    }

    return () => clearTimeout(timerID);
  }, [timerRunning, milliseconds]);

  useEffect(() => {
    if (milliseconds === 1000) {
      setMilliseconds(0);
      setSeconds(seconds + 1);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours(hours + 1);
    }
    if (hours === 24) {
      setHours(0);
    }
  }, [milliseconds, seconds, minutes, hours]);

  const handleStartStop = () => {
    setTimerRunning(!timerRunning);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20%' }}>
        <div id="details" style={{ color: 'whitesmoke', borderStyle: 'solid', fontSize: '48px', borderColor: 'black', background: 'linear-gradient(45deg, black, grey)' }}>
          {hours} Hours
        </div>
        <div id="details" style={{ color: 'whitesmoke', borderStyle: 'solid', fontSize: '48px', borderColor: 'black', background: 'linear-gradient(45deg, black, grey)' }}>
          {minutes} Minutes
        </div>
        <div id="details" style={{ color: 'whitesmoke', borderStyle: 'solid', fontSize: '48px', borderColor: 'black', background: 'linear-gradient(45deg, black, grey)' }}>
          {seconds} Seconds
        </div>
        <div id="details" style={{ color: 'whitesmoke', borderStyle: 'solid', fontSize: '48px', borderColor: 'black', background: 'linear-gradient(45deg, black, grey)' }}>
          {milliseconds} Milliseconds
        </div>
      </div>
      <button id="startstop" onClick={handleStartStop}>{timerRunning ? 'Pause' : 'Start'}</button>
    </>
  );
}

export default App;
