import "./index.css";
import NavbarStatus from "../../../components/navbar/navbar-status";
import React, { useState } from "react";
import { Flex, Select, Tag } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import Checkbox from "@mui/material/Checkbox";
function ActivityDetail() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (value) => {
    console.log(value);
  };

  const [studies_html] = useState([
    {
      content: "F8 HTML, CSS cơ bản",
      createdDate: "2024/03/01",
      createdTime: "09:00-10:00",
      star: true,
    },
    {
      content: "F8 HTML, CSS nâng cao",
      createdDate: "2024/03/30",
      createdTime: "09:00-10:00",
      star: false,
    },
  ]);
  const [studies_js] = useState([
    {
      content: "F8 ReactJS cơ bản",
      createdDate: "2024/03/01",
      createdTime: "09:00-10:00",
      star: true,
    },
    {
      content: "F8 ReactJS nâng cao",
      createdDate: "2024/03/30",
      createdTime: "09:00-10:00",
    },
    {
      content: "Lập trình giao diện Web Thông tin với ReactJS",
    },
  ]);
  const [studies_figma] = useState([
    {
      content: "Làm quen với Figma Youtube-Học UIUX",
      createdDate: "2024/03/01",
      createdTime: "09:00-10:00",
      star: true,
    },
    {
      content: "Figma nâng cao Youtube-Học UIUX",
      createdDate: "2024/03/30",
      createdTime: "09:00-10:00",
      star: false,
    },
  ]);
  return (
    <div>
      <div className="activity-detail-container">
        <NavbarStatus />
        <div className="activity-detail-frame">
          <div className="activity-detail-wrap">
            <div className="activity-detail-doctor">
              <div className="activity-detail-tag">
                <Tag id="act-tag">IT</Tag>
              </div>
              <div className="activity-detail-name">
                <span id="act-title">Học thiết kế Web</span>
              </div>
              <div className="activity-detail-icon">
                <span className="act-icon" id="act-title-icon">
                  <EditOutlined />
                </span>
                <span className="act-icon" id="act-title-icon">
                  <CloseCircleOutlined />
                </span>
              </div>
            </div>

            <div className="activity-detail-item">
              <div className="activity-detail-item-header">
                <h4>Học HTML, CSS</h4>
                <span id="checkbox-act">
                  <Checkbox {...label} disabled checked />
                </span>
              </div>
              <div className="activity-detail-tasks">
                <ul id="task-list">
                  {studies_html.map((study, index) => (
                    <li key={index}>
                      <span className="activity-detail-content">
                        {study.content}
                      </span>
                      <span className="activity-detail-content-detail">
                        <span className="activity-detail-date">
                          {study.createdTime}
                        </span>
                        <span className="activity-detail-date">
                          {study.createdDate}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="activity-detail-item">
                <div className="activity-detail-item-header">
                  <h4>Học ReactJS</h4>
                  <span id="checkbox-act">
                    <Checkbox {...label} disabled />
                  </span>
                </div>
                <div className="activity-detail-tasks">
                  <ul id="task-list">
                    {studies_js.map((study, index) => (
                      <li key={index}>
                        <span className="activity-detail-content">
                          {study.content}
                        </span>
                        <span className="activity-detail-content-detail">
                          <span className="activity-detail-date">
                            {study.createdTime}
                          </span>
                          <span className="activity-detail-date">
                            {study.createdDate}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="activity-detail-item">
                <div className="activity-detail-item-header">
                  <h4>Học thiết kế Figma</h4>
                  <span id="checkbox-act">
                    <Checkbox {...label} disabled />
                  </span>
                </div>
                <div className="activity-detail-tasks">
                  <ul id="task-list">
                    {studies_figma.map((study, index) => (
                      <li key={index}>
                        <span className="activity-detail-content">
                          {study.content}
                        </span>
                        <span className="activity-detail-content-detail">
                          <span className="activity-detail-date">
                            {study.createdTime}
                          </span>
                          <span className="activity-detail-date">
                            {study.createdDate}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActivityDetail;
