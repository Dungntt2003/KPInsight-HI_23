import React, { useState } from "react";
import "./index.css";

const SpeedChart = () => {
  return (
    <div className="speed-chart-container">
      <div className="speedometer">
        <div className="needle">
          <span className="score">20</span>
        </div>
      </div>
    </div>
  );
};

export default SpeedChart;
