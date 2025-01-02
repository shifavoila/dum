import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [time, setTime] = useState(0); // Timer state
  const [isActive, setIsActive] = useState(false); // Timer active state
  const [isPaused, setIsPaused] = useState(false); // Timer paused state

  useEffect(() => {
    let interval;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup on unmount or when timer is stopped
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Timer Application</h1>
        <div className="mb-4">
          <p className="text-3xl">{time}s</p>
        </div>
        <div>
          {!isActive && !isPaused ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleStart}
            >
              Start
            </button>
          ) : (
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handlePause}
            >
              Pause
            </button>
          )}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Effect;