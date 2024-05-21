import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Tag, message, Modal, Pagination } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import NavbarGoal from "../../../../components/navbar/navbar-goal";
const { Option } = Select;

function Target_list() {
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

  //Choose label - select
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

  //Delete confirm - modal
  const LocalizedModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
      setOpenModal(true);
    };
    const handleModalCancel = () => {
      setOpenModal(false);
      message.error("Hủy xóa mục tiêu!");
    };
    const handleModalOk = () => {
      setOpenModal(false);
      message.success("Đã xóa mục tiêu!");
    };
    return (
      <>
        <span
          onClick={showModal}
          className="target-list-icon"
          id="goal-list-title-icon"
        >
          <CloseCircleOutlined />
        </span>
        <Modal
          title="Xóa mục tiêu"
          open={openModal}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="Xác nhận"
          cancelText="Hủy"
        >
          <p>Xác nhận xóa mục tiêu</p>
        </Modal>
      </>
    );
  };

  // Lọc dữ liệu dựa trên tag đã chọn
  const getFilteredData = () => {
    if (selectedTag === "Tất cả nhãn") {
      return [...studies, ...socials, ...personas];
    }
    return [...studies, ...socials, ...personas].filter(
      (item) =>
        item.tag && item.tag.props && item.tag.props.children === selectedTag
    );
  };

  const filteredData = getFilteredData();

  return (
    <div className="target-list-frame">
      <div className="kpi-target-heading">
        <div id="kpi-target-header">Mục tiêu KPI</div>
        <div id="kpi-target-select-container">
          <Select
            defaultValue="Tất cả nhãn"
            style={{
              width: 150,
            }}
            value={selectedTag}
            onChange={handleTagChange}
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
        </div>
      </div>
      <div className="target-list-wrap">
        {filteredData.map((item) => (
          <div className="target-list-item" key={item.id}>
            <ul id="target-goalList">
              <li id="target-goalList-item">
                <span className="target-list-content">{item.content}</span>
                <span className="target-list-content-detail">
                  <span className="target-list-tag">{item.tag}</span>
                  <span className="target-list-date">{item.createdDate}</span>
                  <span
                    className="target-list-icon"
                    onClick={() => handleStarClick(item.id)}
                  >
                    {item.star ? (
                      <StarFilled style={{ color: "gold" }} />
                    ) : (
                      <StarOutlined />
                    )}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <Pagination
        // showQuickJumper
        defaultCurrent={1}
        total={20}
        onChange={handlePagination}
      />
    </div>
  );
}

export default Target_list;
