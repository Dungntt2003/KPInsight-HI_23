import React, { useEffect, useRef } from "react";
import { Select, Divider, Flex, Tag } from "antd";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh
import NavbarStatus from "../../../components/navbar/navbar-status";
import SpeedChart from "../../../components/speed-chart";

const KpiStatus = () => {
  const chartRef = useRef(null);
  //Select chọn nhãn:
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  //Tạo biểu đồ cột:
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
        <div className="columnchart-container">
          {/* Áp dụng class vào container của biểu đồ */}
          <canvas ref={chartRef}></canvas>
        </div>
        <h1 className="name2">Tổng quan trạng thái KPI</h1>
        <SpeedChart min={3} max={8} score={11} />
        <div className="detailKPI">
          <h1 className="detail-tittle">Chi tiết KPI</h1>
          <div className="suggest"></div>
          <div className="activityKPI1">
            <div className="activity-name">
              Học thiết kế giao diện
              <Flex gap="4px 0" wrap>
                <Tag color="green">Tốt</Tag>
              </Flex>
            </div>
            <h1 className="complete-rate">Hoàn thành được 4/5 nhiệm vụ</h1>
            <h1 className="each-time">
              Trung bình thực hiện mỗi nhiệm vụ hết 2h
            </h1>
            <h1 className="need-time">
              Cần thêm 2h nữa để hoàn thành hoạt động này!
            </h1>
            <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            <SpeedChart min={2} max={5} score={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiStatus;
