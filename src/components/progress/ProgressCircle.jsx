import useProgress from "../../hooks/useProgress";

import "./ProgressCircle.css";

const ProgressCircle = ({ progress, children, isCompleted }) => {
  // costom hook to manage progress changes in the DOM
  const { ref } = useProgress(progress);

  return (
    <div
      ref={ref}
      className={`progress ${isCompleted ? "completed" : ""}`}
      data-value={progress}
    >
      {/* timer content */}
      <div className="progress-content">{children}</div>
    </div>
  );
};

export default ProgressCircle;
