import "./index.css";
import React, { useState } from "react";
import { Flex, Select, Tag } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import NavbarGoal from "../../../components/navbar/navbar-goal";

function Target_list() {
  //Choose label
  const handleChange = (value) => {
    console.log(value);
  };

  const [studies] = useState([
    {
      content: "Đạt 3.0/4.0 kì 2023.2",
      // tag: (
      //   <Flex gap="4px 0" wrap>
      //     <Tag color="#074979"></Tag>
      //   </Flex>
      // ),
      createdDate: "2023/08/01",
      star: true,
    },
    {
      content: "Đạt chứng chỉ TOEIC 500+",
      tag: (
        <Flex gap="4px 0" wrap>
          <Tag color="#074979">Ngoại ngữ</Tag>
        </Flex>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      content: "Đạt giải cuộc thi She Codes 2023",
      tag: (
        <Flex gap="4px 0" wrap>
          <Tag color="#074979">IT</Tag>
        </Flex>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
  ]);
  const [socials] = useState([
    {
      content: "Tích cực hoạt động CLB Sách",
      // tag: (
      //   <Flex gap="4px 0" wrap>
      //     <Tag color="#074979"></Tag>
      //   </Flex>
      // ),
      createdDate: "2023/08/01",
      star: false,
    },
    {
      content: "Tham gia tình nguyện 'Mùa hè xanh'",
      // tag: (
      //   <Flex gap="4px 0" wrap>
      //     <Tag color="#074979">Ngoại ngữ</Tag>
      //   </Flex>
      // ),
      createdDate: "2023/07/30",
      star: true,
    },
    {
      content: "Tham gia trải nghiệm làm gốm",
      // tag: (
      //   <Flex gap="4px 0" wrap>
      //     <Tag color="#074979">IT</Tag>
      //   </Flex>
      // ),
      createdDate: "2023/07/30",
      star: false,
    },
  ]);
  return (
    <div className="list-container">
      <NavbarGoal />
      <div className="list-frame">
        <h3>
          <span id="header">Mục tiêu KPI</span>
          <span id="select-container">
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
          </span>
        </h3>

        <div className="list-wrap">
          <h3>
            <span id="title">Học tập</span>
            <span className="icon" id="title-icon">
              <EditOutlined />
            </span>
            <span className="icon" id="title-icon">
              <CloseCircleOutlined />
            </span>
          </h3>

          <div className="list-item">
            <ul id="goalList">
              {studies.map((study, index) => (
                <li key={index}>
                  <span className="content">{study.content}</span>
                  <span className="tag">{study.tag}</span>
                  <span className="date">{study.createdDate}</span>
                  <span className="icon">
                    <StarOutlined />
                  </span>
                </li>
              ))}
            </ul>
            <span className="icon">
              <EllipsisOutlined />
            </span>
          </div>
        </div>

        <div className="list-wrap">
          <h3>
            <span id="title">Xã hội</span>
            <span className="icon" id="title-icon">
              <EditOutlined />
            </span>
            <span className="icon" id="title-icon">
              <CloseCircleOutlined />
            </span>
          </h3>

          <div className="list-item">
            <ul id="goalList">
              {socials.map((social, index) => (
                <li key={index}>
                  <span className="content">{social.content}</span>
                  <span className="tag">{social.tag}</span>
                  <span className="date">{social.createdDate}</span>
                  <span className="icon">
                    <StarOutlined />
                  </span>
                </li>
              ))}
            </ul>
            <span className="icon">
              <EllipsisOutlined />
            </span>
          </div>
        </div>

        {/* <span className="icon">
          <DownCircleOutlined />
        </span> */}
      </div>
    </div>
  );
}

export default Target_list;
