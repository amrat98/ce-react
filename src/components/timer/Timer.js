import React, { useEffect, useState } from 'react';
import "./Timer.css";
const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      onTimeout();
    }
  }, [timeLeft, onTimeout]);

  return <div className='timer-count'>{timeLeft} seconds left</div>;
};

export default Timer;