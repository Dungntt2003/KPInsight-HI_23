import React, { useEffect, useRef, useState } from "react";
import { Select, Tag, Collapse } from "antd";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh
import NavbarStatus from "../../../components/navbar/navbar-status";
import SpeedChart from "../../../components/speed-chart";
import ConfettiEffect from "../../../components/fileworks";
import PieChart from "../../../components/piechart";
import Grid from "@mui/material/Unstable_Grid2";
import AppCurrentKPI from "../home v2/app-current-kpi";

const { Panel } = Collapse;
const KpiStatus = () => {
  const [hover, setHover] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);
  //Select chọn nhãn:
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  const [selectedTag, setSelectedTag] = useState("Tất cả nhãn");
  const handleTagChange = (value) => {
    setSelectedTag(value);
  };
  //Pagigation
  const [current, setCurrent] = useState(1);
  const handlePagination = (page) => {
    console.log(page);
    setCurrent(page);
  };

  // Filtered data based on selected tag
  // const filteredData = datas.filter(
  //   (item) =>
  //     selectedTag === "Tất cả nhãn" ||
  //     (item.tag && item.tag.props && item.tag.props.children === selectedTag)
  // );

  const [activeKey, setActiveKey] = useState([]);

  const handlePanelChange = (key) => {
    setActiveKey(key);
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
            data: [66.7, -50, 207.7, 250, -150, 28.6],
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
          x: {
            ticks: {
              display: false, // Ẩn các nhãn của trục x
            },
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
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFireWorks = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    setHover(true);
    setTimeout(() => {
      setHover(false);
    }, 5000);
  };
  return (
    <div>
      <div>
        <NavbarStatus />
        <h1 className="namepage">Trạng thái KPI</h1>
        <div className="select-tag">
          <Select
            defaultValue="Tất cả"
            style={{
              width: 150,
            }}
            // value={selectedTag}
            onChange={handleTagChange}
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

        <div className="general-kpi">
          <h1 className="name2">Tổng quan</h1>
          <div className="two-chart">
            <div className="sum-rate-wrap">
              {/* <div className="sum-rate">
              <div className="sum-rate-text">{percentage}%</div>
            </div> */}

              <PieChart className="piechart" percentage={58} />
            </div>

            <div className="columnchart-container">
              {/* Áp dụng class vào container của biểu đồ */}
              <canvas ref={chartRef}></canvas>
            </div>
            {/* <Grid xs={12} md={6} lg={4} className="kpi-status-current">
            <AppCurrentKPI
              className="kpi-status-current-chart"
              chart={{
                series: [
                  { label: "Học thiết kế giao diện", value: 66.7 },
                  { label: "Làm Project GR1", value: -50 },
                  { label: "Học ReactJS", value: 207.7 },
                  { label: "Làm BT ITSS", value: 250 },
                  { label: "Code màn Figma", value: -150 },
                  { label: "Học Git", value: 28.6 },
                ],
              }}
            />
          </Grid> */}
          </div>{" "}
        </div>

        <div className="detailKPI">
          <div className="detail-tittle">Chi tiết KPI</div>
          <div className="select-level">
            <Select
              defaultValue="Tất cả"
              style={{
                width: 150,
              }}
              value={selectedTag}
              onChange={handleTagChange}
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
          <Collapse
            accordion
            activeKey={activeKey}
            onChange={handlePanelChange}
            className="collapse-activity"
            // style={{
            //   backgroundColor: "#517fa1",
            //   color: "#074979 !important",
            //   width: "85%",
            //   fontSize: "20px",
            //   fontWeight: "bold",
            //   border: "2px solid #074979",
            //   borderRadius: "15px",
            //   margin: "2vw auto ",
            // }}
          >
            <Panel
              header="Học thiết kế giao diện"
              extra={
                <Tag
                  color="green"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  Tốt
                </Tag>
              }
              key="1"
            >
              {
                <div className="activityKPI1">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">
                        Học thiết kế giao diện
                      </div>
                      <div className="activity-name-tag">
                        <Tag color="green" style={{ fontSize: "15px" }}>
                          Tốt
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">
                      Đã hoàn thành 4/5 nhiệm vụ
                    </h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi nhiệm vụ hết 2 giờ
                    </h1>
                    <h1 className="need-time">
                      Cần thêm 2 giờ nữa để hoàn thành hoạt động này!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div className="activity-chart">
                    <div className="activity-chart-wrap">
                      <SpeedChart min={2} max={5} score={4} />
                    </div>
                  </div>
                </div>
              }
            </Panel>
            <Panel
              header="Làm Project GR1"
              extra={
                <Tag color="volcano" style={{ fontSize: "15px" }}>
                  Trung bình
                </Tag>
              }
              key="2"
            >
              {
                <div className="activityKPI2">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">Làm Project GR1</div>
                      <div className="activity-name-tag">
                        <Tag color="volcano" style={{ fontSize: "15px" }}>
                          Trung bình
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">
                      Đã hoàn thành 2/5 nhiệm vụ
                    </h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi nhiệm vụ hết 3 giờ 12 phút
                    </h1>
                    <h1 className="need-time">
                      Cần thêm 9 giờ 36 phút nữa để hoàn thành hoạt động này!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div className="activity-chart">
                    <div className="activity-chart-wrap">
                      <SpeedChart min={3} max={5} score={2} />
                    </div>
                  </div>
                </div>
              }
            </Panel>
            <Panel
              header="Học ReactJS"
              extra={
                <Tag color="geekblue" style={{ fontSize: "15px" }}>
                  Xuất sắc
                </Tag>
              }
              key="3"
            >
              {
                <div className="activityKPI3">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">Học ReactJS</div>
                      <div className="activity-name-tag">
                        <Tag color="geekblue" style={{ fontSize: "15px" }}>
                          Xuất sắc
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">
                      Đã hoàn thành 34/20 bài học
                    </h1>
                    <h1 className="each-time">
                      Trung bình học một bài hết 20 phút
                    </h1>
                    <h1 className="need-time">
                      Bạn đã hoàn thành vượt chỉ tiêu!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div
                    className="activity-chart"
                    onMouseEnter={handleFireWorks}
                    // onMouseLeave={() => setHover(false)}
                  >
                    <div className="activity-chart-wrap">
                      <SpeedChart min={7} max={20} score={34} />
                    </div>
                    <ConfettiEffect
                      width={dimensions.width}
                      height={dimensions.height}
                      x={position.x - 1000}
                      y={position.y - 250}
                      run={hover}
                    />
                  </div>
                </div>
              }
            </Panel>
            <Panel
              header="Làm BT ITSS"
              extra={
                <Tag color="geekblue" style={{ fontSize: "15px" }}>
                  Xuất sắc
                </Tag>
              }
              key="4"
            >
              {
                <div className="activityKPI4">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">Làm BT ITSS</div>
                      <div className="activity-name-tag">
                        <Tag color="geekblue" style={{ fontSize: "15px" }}>
                          Xuất sắc
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">Đã hoàn thành 10/7 bài</h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi nhiệm vụ hết 1 giờ 30 phút
                    </h1>
                    <h1 className="need-time">
                      Bạn đã hoàn thành vượt chỉ tiêu!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div
                    className="activity-chart"
                    onMouseEnter={handleFireWorks}
                  >
                    <div className="activity-chart-wrap">
                      <SpeedChart min={5} max={7} score={10} />
                    </div>
                    <ConfettiEffect
                      width={dimensions.width}
                      height={dimensions.height}
                      x={position.x - 1000}
                      y={position.y - 250}
                      run={hover}
                    />
                  </div>
                </div>
              }
            </Panel>
            <Panel
              header="Code màn figma"
              extra={
                <Tag color="red" style={{ fontSize: "15px" }}>
                  Yếu
                </Tag>
              }
              key="5"
            >
              {
                <div className="activityKPI5">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">Code màn figma</div>
                      <div className="activity-name-tag">
                        <Tag color="red" style={{ fontSize: "15px" }}>
                          Yếu
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">Đã hoàn thành 1/6 màn</h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi nhiệm vụ hết 4 giờ 45 phút
                    </h1>
                    <h1 className="need-time">
                      Cần thêm 23 giờ 45 phút nữa để hoàn thành hoạt động này!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div className="activity-chart">
                    <div className="activity-chart-wrap">
                      <SpeedChart min={4} max={6} score={1} />
                    </div>
                  </div>
                </div>
              }
            </Panel>
            <Panel
              header="Học Git"
              extra={
                <Tag color="gold" style={{ fontSize: "15px" }}>
                  Khá
                </Tag>
              }
              key="6"
            >
              {
                <div className="activityKPI6">
                  <div className="activity-content">
                    {/* <div className="activity-name">
                      <div className="activity-name-sub">Học Git</div>
                      <div className="activity-name-tag">
                        <Tag color="gold" style={{ fontSize: "15px" }}>
                          Khá
                        </Tag>
                      </div>
                    </div> */}
                    <h1 className="complete-rate">
                      Đã hoàn thành 6/11 bài học
                    </h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi nhiệm vụ hết 40 phút
                    </h1>
                    <h1 className="need-time">
                      Cần thêm 3 giờ 20 phút nữa để hoàn thành hoạt động này!
                    </h1>
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div className="activity-chart">
                    <div className="activity-chart-wrap">
                      <SpeedChart min={4} max={11} score={6} />
                    </div>
                  </div>
                </div>
              }
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default KpiStatus;
