import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh
import NavbarStatus from "../../../components/navbar/navbar-status";

const KpiStatus = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Học thiết kế giao diện",
          "Làm Project GR1",
          "Học ReactJS",
          "Làm BT ITSS",
          "Code",
          "June",
          "July",
          "August",
        ],
        datasets: [
          {
            label: "Sales 1",
            data: [65, 129, 80, 81, 56, 55, 40],
            backgroundColor: "#074979",
            borderWidth: 1,
            borderSkipped: false,
          },
          {
            label: "Sales 2",
            data: [100, 100, 100, 100, 100, 100, 100],
            backgroundColor: "#B8D3E7",
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
            display: true,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        interaction: {
          mode: "index",
          intersect: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            maxBarThickness: 100, // Đặt độ dày tối đa của cột
          },
        },
        layout: {
          padding: {
            right: 100, // Cung cấp không gian bên phải để scrollbar hiển thị
          },
        },
        plugins: {
          scrollbar: {
            // Thiết lập scrollbar
            display: true,
            axis: "x", // Thiết lập scrollbar cho trục x (ngang)
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <div>
        <NavbarStatus />
        <div className="chart-container">
          {/* Áp dụng class vào container của biểu đồ */}
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default KpiStatus;
