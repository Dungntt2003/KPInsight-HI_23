import React from "react";
import "./index.css";

const SpeedChart = ({ min, score, max }) => {
  return (
    <div
      className="speed-chart-container"
      style={{ "--score": score, "--min": min, "--max": max }}
    >
      <div className="speedometer">
        <div className="needle"></div>
        <div className="score-container">
          <span className="score">{score}%</span>
        </div>
        <div className="marker min-marker" title={`Min: ${min}`}></div>
        <div className="marker max-marker" title={`Max: ${max}`}></div>
      </div>
    </div>
  );
};

export default SpeedChart;
