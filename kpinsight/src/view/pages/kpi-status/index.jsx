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
            data: [80, 40, 170, 142.9, 16.7, 54.5],
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
        <div className="select1">
          <Select
            defaultValue="Tất cả"
            style={{
              width: 150,
            }}
            onChange={handleChange}
            options={[
              {
                label: <span>Tất cả</span>,
                value: "Tất cả",
              },
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
                label: <span>Xã hội</span>,
                title: "Học tập",
                options: [
                  {
                    label: <span>CLB</span>,
                    value: "CLB",
                  },
                  {
                    label: <span>Tình nguyện</span>,
                    value: "Tình nguyện",
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
        <div className="detailKPI">
          <div className="detail-tittle">Chi tiết KPI</div>
          <div className="select2">
            <Select
              defaultValue="Tất cả"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={[
                {
                  label: <span>Tất cả</span>,
                  value: "Tất cả",
                },
                {
                  label: <span>Xuất sắc</span>,
                  value: "Xuất sắc",
                },
                {
                  label: <span>Tốt</span>,
                  value: "Tốt",
                },
                {
                  label: <span>Khá</span>,
                  value: "Khá",
                },
                {
                  label: <span>Trung bình</span>,
                  value: "Trung bình",
                },
                {
                  label: <span>Yếu</span>,
                  value: "Yếu",
                },
              ]}
            />
          </div>
          <div className="suggest">
            <h1 className="suggest-name">
              Đề xuất hoạt động nên ưu tiên hoàn thành
            </h1>
            <h1 className="suggest-notice">
              (Dành cho những hoạt động chưa đạt mức giá trị tối thiểu khi đã
              qua 3/4 giai đoạn)
            </h1>
            <div className="suggest-data">
              <div className="activity-name">
                <div className="activity-name-sub">Làm Project GR1</div>
                <div className="activity-name-tag">
                  <Tag color="volcano" style={{ fontSize: "15px" }}>
                    Trung bình
                  </Tag>
                </div>
              </div>
              <div className="activity-name">
                <div className="activity-name-sub">Code màn figma</div>
                <div className="activity-name-tag">
                  <Tag color="red" style={{ fontSize: "15px" }}>
                    Yếu
                  </Tag>
                </div>
              </div>
            </div>
          </div>

          <div className="activityKPI1">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Học thiết kế giao diện</div>
                <div className="activity-name-tag">
                  <Tag color="green" style={{ fontSize: "15px" }}>
                    Tốt
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 4/5 nhiệm vụ</h1>
              <h1 className="each-time">
                Trung bình thực hiện mỗi nhiệm vụ hết 2 giờ
              </h1>
              <h1 className="need-time">
                Cần thêm 2 giờ nữa để hoàn thành hoạt động này!
              </h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={2} max={5} score={4} />
              </div>
            </div>
          </div>
          <div className="activityKPI2">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Làm Project GR1</div>
                <div className="activity-name-tag">
                  <Tag color="volcano" style={{ fontSize: "15px" }}>
                    Trung bình
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 2/5 nhiệm vụ</h1>
              <h1 className="each-time">
                Trung bình thực hiện mỗi nhiệm vụ hết 3 giờ 12 phút
              </h1>
              <h1 className="need-time">
                Cần thêm 9 giờ 36 phút nữa để hoàn thành hoạt động này!
              </h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={3} max={5} score={2} />
              </div>
            </div>
          </div>
          <div className="activityKPI3">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Học ReactJS</div>
                <div className="activity-name-tag">
                  <Tag color="geekblue" style={{ fontSize: "15px" }}>
                    Xuất sắc
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 34/20 bài học</h1>
              <h1 className="each-time">Trung bình học một bài hết 20 phút</h1>
              <h1 className="need-time">Bạn đã hoàn thành vượt chỉ tiêu!</h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={7} max={20} score={34} />
              </div>
            </div>
          </div>
          <div className="activityKPI4">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Làm BT ITSS</div>
                <div className="activity-name-tag">
                  <Tag color="geekblue" style={{ fontSize: "15px" }}>
                    Xuất sắc
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 10/7 bài</h1>
              <h1 className="each-time">
                Trung bình thực hiện mỗi nhiệm vụ hết 1 giờ 30 phút
              </h1>
              <h1 className="need-time">Bạn đã hoàn thành vượt chỉ tiêu!</h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={5} max={7} score={10} />
              </div>
            </div>
          </div>
          <div className="activityKPI5">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Code màn figma</div>
                <div className="activity-name-tag">
                  <Tag color="red" style={{ fontSize: "15px" }}>
                    Yếu
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 1/6 màn</h1>
              <h1 className="each-time">
                Trung bình thực hiện mỗi nhiệm vụ hết 4 giờ 45 phút
              </h1>
              <h1 className="need-time">
                Cần thêm 23 giờ 45 phút nữa để hoàn thành hoạt động này!
              </h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={4} max={6} score={1} />
              </div>
            </div>
          </div>
          <div className="activityKPI6">
            <div className="activity-content">
              <div className="activity-name">
                <div className="activity-name-sub">Học Git</div>
                <div className="activity-name-tag">
                  <Tag color="gold" style={{ fontSize: "15px" }}>
                    Khá
                  </Tag>
                </div>
              </div>
              <h1 className="complete-rate">Đã hoàn thành 6/11 bài học</h1>
              <h1 className="each-time">
                Trung bình thực hiện mỗi nhiệm vụ hết 40 phút
              </h1>
              <h1 className="need-time">
                Cần thêm 3 giờ 20 phút nữa để hoàn thành hoạt động này!
              </h1>
              <h1 className="request-view-activity">Xem chi tiết hoạt động</h1>
            </div>
            <div className="activity-chart">
              <div className="activity-chart-wrap">
                <SpeedChart min={4} max={11} score={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiStatus;
