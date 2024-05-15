import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Tag, message, Popconfirm, Button, Checkbox } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import NavbarGoal from "../../../../components/navbar/navbar-goal";

function Target_list() {
  //Choose label - select
  const handleLabel = (value) => {
    console.log(value);
  };

  //Star
  const handleStarClick = (id) => {
    setStudies(
      studies.map((study) =>
        study.id === id ? { ...study, star: !study.star } : study
      )
    );
    setSocials(
      socials.map((social) =>
        social.id === id ? { ...social, star: !social.star } : social
      )
    );
    setPersonas(
      personas.map((persona) =>
        persona.id === id ? { ...persona, star: !persona.star } : persona
      )
    );
  };

  //Pop confirm
  const confirm = (e) => {
    console.log(e);
    message.success("Đã xóa mục tiêu!");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Hủy xóa mục tiêu!");
  };

  //Data
  const [studies, setStudies] = useState([
    {
      id: 0,
      content: "Đạt 3.0/4.0 kì 2023.2",
      // tag: (
      //     <Tag id=""color="#074979"></Tag>
      // ),
      createdDate: "2023/08/01",
      star: true,
    },
    {
      id: 1,
      content: "Đạt chứng chỉ TOEIC 500+",
      tag: (
        <Tag id="tag-nn" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 2,
      content: "Đạt giải cuộc thi She Codes 2023",
      tag: (
        <Tag id="tag-it" color="red">
          IT
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 9,
      content: "Đạt KPA 3.0/4.0 kì 2022.2",
      // tag: (
      //   <Tag id="tag-it" color="red">
      //     IT
      //   </Tag>
      // ),
      createdDate: "2023/02/15",
      star: true,
    },
    {
      id: 10,
      content: "Đạt chứng chỉ JLPT N3",
      tag: (
        <Tag id="tag-nn" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2023/02/15",
      star: false,
    },
    {
      id: 11,
      content: "Hoàn thành khóa học ReactJS",
      tag: (
        <Tag id="tag-it" color="red">
          IT
        </Tag>
      ),
      createdDate: "2023/02/15",
      star: false,
    },
  ]);
  const [socials, setSocials] = useState([
    {
      id: 3,
      content: "Tích cực hoạt động CLB Sách",
      tag: (
        <Tag id="tag-clb" color="magenta">
          CLB
        </Tag>
      ),
      createdDate: "2023/08/01",
      star: false,
    },
    {
      id: 4,
      content: "Tham gia tình nguyện 'Mùa hè xanh'",
      // tag: (
      //     <Tag color="#074979">Ngoại ngữ</Tag>
      // ),
      createdDate: "2023/07/30",
      star: true,
    },
    {
      id: 5,
      content: "Tham gia trải nghiệm làm gốm",
      // tag: (
      //     <Tag color="#074979">IT</Tag>
      // ),
      createdDate: "2023/07/30",
      star: false,
    },
  ]);
  const [personas, setPersonas] = useState([
    {
      id: 6,
      content: "Chăm sóc sức khỏe",
      tag: (
        <Tag id="tag-sk" color="magenta">
          Sức khỏe
        </Tag>
      ),
      createdDate: "2023/08/01",
      star: false,
    },
    {
      id: 7,
      content: "Dành thời gian cho gia đình",
      tag: (
        <Tag id="tag-gd" color="red">
          Gia đình
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: true,
    },
    {
      id: 8,
      content: "Quản lý chi tiêu hiệu quả",
      tag: (
        <Tag id="tag-tc" color="orange">
          Tài chính
        </Tag>
      ),
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
              defaultValue="Tất cả nhãn"
              style={{
                width: 150,
              }}
              onChange={handleLabel}
              options={[
                {
                  label: <span>Tất cả nhãn</span>,
                  value: "Tất cả nhãn",
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
                  title: "Xã hội",
                  options: [
                    {
                      label: <span>CLB</span>,
                      value: "CLB",
                    },
                  ],
                },
                {
                  label: <span>Cá nhân</span>,
                  title: "Cá nhân",
                  options: [
                    {
                      label: <span>Sức khỏe</span>,
                      value: "Sức khỏe",
                    },
                    {
                      label: <span>Gia đình</span>,
                      value: "Gia đình",
                    },
                    {
                      label: <span>Tài chính</span>,
                      value: "Tài chính",
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
            {/* <Link
              to="/target_detail"
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link> */}
            <Popconfirm
              placement="bottomLeft"
              title="Xóa mục tiêu"
              description="Xác nhận xóa mục tiêu"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Xác nhận"
              cancelText="Hủy"
            >
              <span className="target-list-icon" id="goal-list-title-icon">
                <CloseCircleOutlined />
              </span>
            </Popconfirm>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {studies.map((study, index) => (
                <li id="target-goalList-item" key={index}>
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
            <Button id="target-detail-btn">Lưu và Thoát</Button>
          </div>
        </div>

        {/* <div className="target-list-wrap">
          <h3>
            <span id="goal-list-title">Xã hội</span>
            <Link
              to="/target_detail"
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link>
            <Popconfirm
              placement="bottomLeft"
              title="Xóa mục tiêu"
              description="Xác nhận xóa mục tiêu"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Xác nhận"
              cancelText="Hủy"
            >
              <span className="target-list-icon" id="goal-list-title-icon">
                <CloseCircleOutlined />
              </span>
            </Popconfirm>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {socials.map((social, index) => (
                <li id="target-goalList-item" key={index}>
                  <span className="target-list-content">{social.content}</span>
                  <span className="target-list-content-detail">
                    <span className="target-list-tag">{social.tag}</span>
                    <span className="target-list-date">
                      {social.createdDate}
                    </span>
                    <span
                      className="target-list-icon"
                      onClick={() => handleStarClick(social.id)}
                    >
                      {social.star ? (
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
          </div>
        </div>

        <div className="target-list-wrap">
          <h3>
            <span id="goal-list-title">Cá nhân</span>
            <Link
              to="/target_detail"
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link>
            <Popconfirm
              placement="bottomLeft"
              title="Xóa mục tiêu"
              description="Xác nhận xóa mục tiêu"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Xác nhận"
              cancelText="Hủy"
            >
              <span className="target-list-icon" id="goal-list-title-icon">
                <CloseCircleOutlined />
              </span>
            </Popconfirm>
          </h3>

          <div className="target-list-item">
            <ul id="target-goalList">
              {personas.map((persona, index) => (
                <li id="target-goalList-item" key={index}>
                  <span className="target-list-content">{persona.content}</span>
                  <span className="target-list-content-detail">
                    <span className="target-list-tag">{persona.tag}</span>
                    <span className="target-list-date">
                      {persona.createdDate}
                    </span>
                    <span
                      className="target-list-icon"
                      onClick={() => handleStarClick(persona.id)}
                    >
                      {persona.star ? (
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
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Target_list;
