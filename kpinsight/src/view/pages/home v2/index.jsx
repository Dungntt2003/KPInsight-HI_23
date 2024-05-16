import "./index.css";
import React, { useState } from "react";
import { Calendar } from "antd";
import { Divider, Flex, Tag, Button } from "antd";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import WarningIcon from "@mui/icons-material/Warning";
import AppWidgetSummary from "./app-widget-summary";
import AppCurrentKPI from "./app-current-kpi";
import ImageIcon from "../../../assets/icons/glass/war-icon.webp";
import ImgIcon from "../../../assets/icons/glass/task-icon.png";
import IconDone from "../../../assets/icons/glass/done.webp";
import IconProgress from "../../../assets/icons/glass/inprogress.png";
function Home() {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="home-main-container">
      {/* <Typography variant="h5" sx={{ mb: 5 }}>
        Xin chào 👋
      </Typography> */}
      <Grid container spacing={3}>
        {/* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/war-icon.webp" />}
          />
        </Grid> */}
        <Grid xs={12} sm={6} md={3} className="summary-home">
          <AppWidgetSummary
            title="Đã 2 tuần không cập nhật"
            total="2"
            color="info"
            icon={<img alt="icon" src={ImageIcon} style={{ width: "60px" }} />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3} className="summary-home">
          <AppWidgetSummary
            title="Tổng số nhiệm vụ hiện tại"
            total={60}
            color="warning"
            icon={<img alt="icon" src={ImgIcon} style={{ width: "60px" }} />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Nhiệm vụ đã hoàn thành"
            total={40}
            color="error"
            icon={<img alt="icon" src={IconDone} style={{ width: "60px" }} />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Nhiệm vụ chưa hoàn thành"
            total={20}
            color="error"
            icon={
              <img alt="icon" src={IconProgress} style={{ width: "60px" }} />
            }
          />
        </Grid>
      </Grid>
      {/* <Grid xs={12} md={6} lg={8} className="calendar-content">
        <div className="flex-item calendar-wrap">
          <div className="calendar-container">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>
        <div className="activity-list-content">
          <div className="activity-detail">
            Học thiết kế Web
            <Tag className="tag">IT</Tag>
            <span className="time">08:00 - 11:30</span>
          </div>
          <Button className="update-button">Cập nhật</Button>
        </div>
        <div className="activity-list-content">
          <div className="activity-detail">
            Học từ vựng N3+
            <Tag className="tag">Ngoại ngữ</Tag>
            <span className="time">14:00 - 15:30</span>
          </div>
          <Button className="update-button">Cập nhật</Button>
        </div>
        <div className="activity-list-content">
          <div className="activity-detail">
            Luyện Shadowing
            <Tag className="tag">Ngoại ngữ</Tag>
            <span className="time">19:00 - 21:00</span>
          </div>
          <Button className="update-button">Cập nhật</Button>
        </div>
      </Grid> */}
      <div className="schedule-container">
        <div className="calendar-wrap">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div className="activity-list">
          <div className="activity-list-content">
            <div className="activity-detail">
              Học thiết kế Web
              <Tag className="tag" color="volcano">
                IT
              </Tag>
              <span className="time">08:00 - 11:30</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>

          <div className="activity-list-content">
            <div className="activity-detail">
              Học từ vựng N3+
              <Tag className="tag" color="magenta">
                Ngoại ngữ
              </Tag>
              <span className="time">14:00 - 15:30</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>

          <div className="activity-list-content">
            <div className="activity-detail">
              Học ngữ pháp N3
              <Tag className="tag" color="magenta">
                Ngoại ngữ
              </Tag>
              <span className="time">16:00 - 17:00</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
          <div className="activity-list-content">
            <div className="activity-detail">
              Nghe hiểu
              <Tag className="tag" color="magenta">
                Ngoại ngữ
              </Tag>
              <span className="time">19:00 - 20:00</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
          <div className="activity-list-content">
            <div className="activity-detail">
              Luyện Shadowing
              <Tag className="tag" color="magenta">
                Ngoại ngữ
              </Tag>
              <span className="time">20:00 - 21:00</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
        </div>
      </div>
      <Grid xs={12} md={6} lg={4} className="current-kpi">
        <AppCurrentKPI
          title="KPI tổng quan"
          chart={{
            series: [
              { label: "IT", value: 40 },
              { label: "Ngoại ngữ", value: 30 },
              { label: "Tài chính", value: 10 },
              { label: "Tình nguyện", value: 10 },
            ],
          }}
        />
      </Grid>
    </div>
  );
}

export default Home;
