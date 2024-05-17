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
import { Link } from "react-router-dom";
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
      createdTime: "20:00-24:00",
      star: false,
    },
  ]);
  const [studies_js] = useState([
    {
      content: "F8 ReactJS cơ bản",
      createdDate: "2024/04/01",
      createdTime: "15:00-17:00",
      star: true,
    },
    {
      content: "F8 ReactJS nâng cao",
      createdDate: "2024/04/05",
      createdTime: "16:00-18:00",
    },
    {
      content: "Lập trình giao diện Web Thông tin với ReactJS",
      createdDate: "2024/04/10",
      createdTime: "09:00-10:00",
    },
  ]);
  const [studies_figma] = useState([
    {
      content: "Làm quen với Figma Youtube-Học UIUX",
      createdDate: "2024/04/01",
      createdTime: "11:00-15:00",
    },
    {
      content: "Figma nâng cao Youtube-Học UIUX",
      createdDate: "2024/04/04",
      createdTime: "19:00-21:00",
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
                <Link className="header-link" to="/activity-list">
                  <span className="act-icon" id="act-title-icon">
                    <CloseCircleOutlined />
                  </span>
                </Link>
              </div>
            </div>

            <div className="activity-detail-item">
              <div className="activity-detail-item-header">
                <h4>Học HTML, CSS</h4>
                <span id="checkbox-act">
                  <Checkbox {...label} defaultChecked />
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
                    <Checkbox {...label} defaultChecked />
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
                    <Checkbox {...label} />
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
