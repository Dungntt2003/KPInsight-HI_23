import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh

const KpiStatus = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderSkipped: false,
          },
          {
            label: "Sales 2",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            borderSkipped: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="chart-container">
      {" "}
      {/* Áp dụng class vào container của biểu đồ */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default KpiStatus;
