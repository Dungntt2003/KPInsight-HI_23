import React, { useState, useEffect } from "react";
import "./index.css";

const SpeedChart = ({ min, score, max }) => {
  return (
    <div className="speed-chart-container" style={{ "--score": score }}>
      <div className="speedometer">
        <div className="needle">
          <span className="score">{score}</span>
        </div>
        {/* Add additional markers or elements here as needed */}
      </div>
    </div>
  );
};

export default SpeedChart;
