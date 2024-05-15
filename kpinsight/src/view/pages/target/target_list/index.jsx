import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Select, Tag } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
  DownCircleOutlined,
} from "@ant-design/icons";
import NavbarGoal from "../../../../components/navbar/navbar-goal";

function Target_list() {
  //Choose label
  const handleChange = (value) => {
    console.log(value);
  };

  //Star
  const handleStarClick = (id) => {
    setStudies(
      studies.map((study) =>
        study.id === id ? { ...study, star: !study.star } : study
      )
    );
  };

  //Filter
  // const [selectedTag, setSelectedTag] = useState(""); // Trạng thái của tag được chọn
  // const filteredStudies = studies.filter(
  //   (study) =>
  //     selectedTag === "" ||
  //     (study.tag && study.tag.props.children === selectedTag)
  // );

  const [studies, setStudies] = useState([
    {
      id: 0,
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
      id: 1,
      content: "Đạt chứng chỉ TOEIC 500+",
      tag: <Tag color="magenta">Ngoại ngữ</Tag>,
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 2,
      content: "Đạt giải cuộc thi She Codes 2023",
      tag: <Tag color="red">IT</Tag>,
      createdDate: "2023/07/30",
      star: false,
    },
  ]);
  const [socials, setSocials] = useState([
    {
      content: "Tích cực hoạt động CLB Sách",
      tag: <Tag color="magenta">CLB</Tag>,
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
  const [personas, setPersonas] = useState([
    {
      content: "Chăm sóc sức khỏe",
      tag: <Tag color="magenta">Sức khỏe</Tag>,
      createdDate: "2023/08/01",
      star: false,
    },
    {
      content: "Dành thời gian cho gia đình",
      tag: <Tag color="red">Gia đình</Tag>,
      createdDate: "2023/07/30",
      star: true,
    },
    {
      content: "Quản lý chi tiêu hiệu quả",
      tag: <Tag color="orange">Tài chính</Tag>,
      createdDate: "2023/07/30",
      star: false,
    },
  ]);
  return (
    <div className="target-list-container">
      <NavbarGoal />
      <div className="target-list-frame">
        <h3>
          <span id="kpi-target-header">Mục tiêu KPI</span>
          <span id="kpi-target-select-container">
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

        <div className="target-list-wrap">
          <h3>
            <span id="goal-list-title">Học tập</span>
            <Link
              to="/target_detail"
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link>
            <span className="target-list-icon" id="goal-list-title-icon">
              <CloseCircleOutlined />
            </span>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {studies.map((study, index) => (
                <li key={index}>
                  <span className="target-list-content">{study.content}</span>
                  <span className="target-list-content-detail">
                    <span className="target-list-tag">{study.tag}</span>
                    <span className="target-list-date">
                      {study.createdDate}
                    </span>
                    <span
                      className="target-list-icon"
                      onClick={() => handleStarClick(study.id)}
                    >
                      {study.star ? (
                        <StarFilled style={{ color: "gold" }} />
                      ) : (
                        <StarOutlined />
                      )}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/target_detail" className="target-list-icon">
              <EllipsisOutlined />
            </Link>
            {/* <span className="target-list-icon">
              <EllipsisOutlined />
            </span>
            {showOtherScreen && <Target_detail />} */}
          </div>
        </div>

        <div className="target-list-wrap">
          <h3>
            <span id="goal-list-title">Xã hội</span>
            <span className="target-list-icon" id="goal-list-title-icon">
              <EditOutlined />
            </span>
            <span className="target-list-icon" id="goal-list-title-icon">
              <CloseCircleOutlined />
            </span>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {socials.map((social, index) => (
                <li key={index}>
                  <span className="target-list-content">{social.content}</span>
                  <span className="target-list-content-detail">
                    <span className="target-list-tag">{social.tag}</span>
                    <span className="target-list-date">
                      {social.createdDate}
                    </span>
                    <span className="target-list-icon">
                      <StarOutlined />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="target-list-icon">
              <EllipsisOutlined />
            </span>
          </div>
        </div>

        <div className="target-list-wrap">
          <h3>
            <span id="goal-list-title">Cá nhân</span>
            <span className="target-list-icon" id="goal-list-title-icon">
              <EditOutlined />
            </span>
            <span className="target-list-icon" id="goal-list-title-icon">
              <CloseCircleOutlined />
            </span>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {personas.map((persona, index) => (
                <li key={index}>
                  <span className="target-list-content">{persona.content}</span>
                  <span className="target-list-content-detail">
                    <span className="target-list-tag">{persona.tag}</span>
                    <span className="target-list-date">
                      {persona.createdDate}
                    </span>
                    <span className="target-list-icon">
                      <StarOutlined />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="target-list-icon">
              <EllipsisOutlined />
            </span>
          </div>
        </div>

        {/* <span className="target-list-icon">
          <DownCircleOutlined />
        </span> */}
      </div>
    </div>
  );
}

export default Target_list;
