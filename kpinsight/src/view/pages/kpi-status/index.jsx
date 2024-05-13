import React, { useEffect, useRef } from "react";
import { Select } from "antd";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh
import NavbarStatus from "../../../components/navbar/navbar-status";
import DonutChart from "../../../components/donut-chart";

const KpiStatus = () => {
  const min = 20;
  const max = 180;
  const current = 50;

  const chartRef = useRef(null);
  //Select chọn nhãn:
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  //Tạo biểu đồ:
  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Học thiết kế giao diện",
          "Làm Project GR1",
          "Học ReactJS",
          "Làm BT ITSS",
          "Code màn figma",
          "Học Git",
        ],
        datasets: [
          {
            label: "Đã thực hiện",
            data: [80, 40, 120, 145, 65, 90],
            backgroundColor: "#074979",
            borderWidth: 0,
            borderSkipped: false,
          },
          {
            label: "Mục tiêu",
            data: [100, 100, 100, 100, 100, 100],
            backgroundColor: "#B8D3E7",
            borderWidth: 0,
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
          scrollbar: {
            display: true,
            axis: "x",
            maxVisible: 5, // Chỉ hiển thị 5 cột ghép trên biểu đồ
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            maxBarThickness: 100,
          },
        },
        layout: {
          padding: {
            right: 20,
          },
        },
        interaction: {
          mode: "index",
          intersect: true,
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
        <h1 className="namepage">Trạng thái KPI</h1>
        <div className="select">
          <Select
            defaultValue="Lọc theo nhãn"
            style={{
              width: 150,
            }}
            onChange={handleChange}
            options={[
              {
                label: <span>Học tập</span>,
                title: "Học tập",
                options: [
                  {
                    label: <span>IT</span>,
                    value: "IT",
                  },
                  {
                    label: <span>Ngoại ngữ</span>,
                    value: "Ngoại ngữ",
                  },
                ],
              },
              {
                label: <span>Cá nhân</span>,
                title: "Cá nhân",
                options: [
                  {
                    label: <span>Gia đình</span>,
                    value: "Gia đình",
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="chart-container">
          {/* Áp dụng class vào container của biểu đồ */}
          <canvas ref={chartRef}></canvas>
        </div>
        <h1 className="name2">Tổng quan trạng thái KPI</h1>
        <DonutChart min={min} max={max} current={current} />
      </div>
    </div>
  );
};

export default KpiStatus;
