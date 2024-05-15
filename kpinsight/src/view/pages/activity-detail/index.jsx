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

function ActivityDetail() {
  const handleChange = (value) => {
    console.log(value);
  };

  const [studies] = useState([
    {
      content: "Đạt 3.0/4.0 kì 2023.2",
      createdDate: "2023/08/01",
      createdTime: "09:00-10:00",
      star: true,
    },
    {
      content: "Đạt chứng chỉ TOEIC 500+",
      createdDate: "2023/07/30",
      createdTime: "09:00-10:00",
      star: false,
    },
  ]);
  // const [socials] = useState([
  //   {
  //     content: "Tích cực hoạt động CLB Sách",
  //     createdDate: "2023/08/01",
  //     star: false,
  //   },
  //   {
  //     content: "Tham gia tình nguyện 'Mùa hè xanh'",
  //     createdDate: "2023/07/30",
  //     star: true,
  //   },
  //   {
  //     content: "Tham gia trải nghiệm làm gốm",
  //     // tag: (
  //     //   <Flex gap="4px 0" wrap>
  //     //     <Tag color="#074979">IT</Tag>
  //     //   </Flex>
  //     // ),
  //     createdDate: "2023/07/30",
  //     star: false,
  //   },
  // ]);
  // const [personas] = useState([
  //   {
  //     content: "Chăm sóc sức khỏe",
  //     // tag: (
  //     //   <Flex gap="4px 0" wrap>
  //     //     <Tag color="#074979"></Tag>
  //     //   </Flex>
  //     // ),
  //     createdDate: "2023/08/01",
  //     star: false,
  //   },
  //   {
  //     content: "Dành thời gian cho gia đình",
  //     tag: (
  //       <Flex gap="4px 0" wrap>
  //         <Tag color="#074979">Gia đình</Tag>
  //       </Flex>
  //     ),
  //     createdDate: "2023/07/30",
  //     star: true,
  //   },
  //   {
  //     content: "Quản lý chi tiêu hiệu quả",
  //     createdDate: "2023/07/30",
  //     star: false,
  //   },
  // ]);
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
              <h4>Học HTML, CSS</h4>
              <div className="activity-detail-tasks">
                <ul id="task-list">
                  {studies.map((study, index) => (
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
                        <span className="activity-detail-icon">
                          <StarOutlined />
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="activity-detail-icon">
                <EllipsisOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActivityDetail;
