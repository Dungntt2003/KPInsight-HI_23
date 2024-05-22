// PieChart.js
import React, { useState, useEffect } from "react";
import "./index.css";

const PieChart = ({ percentage }) => {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);

  useEffect(() => {
    if (displayedPercentage < percentage) {
      const interval = setInterval(() => {
        setDisplayedPercentage((prevPercentage) => {
          const nextPercentage = prevPercentage + 1;
          return nextPercentage > percentage ? percentage : nextPercentage;
        });
      }, 10); // Tùy chỉnh tốc độ hiển thị
      return () => clearInterval(interval);
    }
  }, [percentage, displayedPercentage]);

  const degree = displayedPercentage * 3.6;

  return (
    <div className="sum-rate-wrap">
      <div
        className="sum-rate"
        style={{
          "--percentage": `${degree}deg`,
        }}
      >
        <div className="text-wrap">
          <div className="sum-rate-text">{displayedPercentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
