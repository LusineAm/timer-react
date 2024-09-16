import { useState, useEffect } from "react";
import ProgressCircle from "../progress/ProgressCircle";
import Button from "../button/Button";

import "./Timer.css";

const Timer = ({ title, endTime, elapsedTime = 0 }) => {
  // states for managing
  const [timeLeft, setTimeLeft] = useState(endTime - elapsedTime);
  const [timeElapsed, setTimeElapsed] = useState(elapsedTime);
  const [progress, setProgress] = useState((100 / endTime) * timeElapsed);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // check if the timer exceeds 59:59 and throw error ifit does
    if (endTime > 3599)
      throw new Error("Timer cannot exceed 59 minutes 59 seconds");

    let timer;

    // timer logic: run the countdown if the timer is running and there's time left
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          // when timeLeft reaches 0, stop the timer and mark it as completed
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsCompleted(true);
            return 0;
          }
          return prevTime - 1;
        });
        setTimeElapsed((prevTime) => prevTime + 1); // increment elapsed time
        setProgress(() => 100 / endTime + progress); // update progress
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false); // stop the timer if timeLeft is 0
    }
    // clean interval
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, endTime, progress]);
  //  time format logic
  const formatTime = (s) => {
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  // control buttons
  const handleStart = () => {
    setIsRunning(true);

    // reset the timer if its completed or reset
    if (timeLeft === 0) {
      setTimeLeft(endTime - elapsedTime);
      setTimeElapsed(elapsedTime);
      setProgress((100 / endTime) * elapsedTime);
      setIsCompleted(false);
    }
  };
  const handlePause = () => setIsRunning(false);
  // resets the timer and progress to 0
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setTimeElapsed(endTime);
    setProgress(0);
    setIsCompleted(false);
  };

  return (
    <div className="container">
      {/* shows visual progress of the timer */}
      <ProgressCircle progress={progress} isCompleted={isCompleted}>
        <span className="title">{title}</span>
        <span className="timer">{formatTime(timeLeft)}</span>
        <span className="elapsed-time">{formatTime(timeElapsed)} left</span>
      </ProgressCircle>
      <div className="controls">
        {/* control buttons */}
        <Button onClick={handleStart} name={"Start"} />
        <Button onClick={handlePause} name={"Pause"} />
        <Button onClick={handleReset} name={"Reset"} />
      </div>
    </div>
  );
};

export default Timer;
