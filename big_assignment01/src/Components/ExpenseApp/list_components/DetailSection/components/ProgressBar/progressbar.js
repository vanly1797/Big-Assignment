import './style.css';

export const ProgressBar = (props) => {
  const { month, percentage } = props;
  return (
    <div className="progress-bar-container">
      <div className="progress-outer">
        <div className="progress-inner" style={{ height: `${percentage}%` }} ></div>
      </div>
      <span>{month}</span>
    </div>
  );
};
