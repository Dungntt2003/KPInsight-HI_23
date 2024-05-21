import "./index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Tag, message, Modal, Pagination } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import ShowDataComponent from "./show_data_component";
const { Option } = Select;

function Target_list() {
  //Data
  const [datas, setDatas] = useState([
    {
      id: 0,
      area: "Học tập",
      content: "Đạt 3.0/4.0 kì 2023.2",
      // tag: (
      //     <Tag id=""color="#074979"></Tag>
      // ),
      createdDate: "2023/08/01",
      star: true,
    },
    {
      id: 1,
      area: "Học tập",
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
      area: "Học tập",
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
      id: 3,
      area: "Xã hội",
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
      area: "Xã hội",
      content: "Tham gia tình nguyện 'Mùa hè xanh'",
      // tag: (
      //     <Tag color="#074979">Ngoại ngữ</Tag>
      // ),
      createdDate: "2023/07/30",
      star: true,
    },
    {
      id: 5,
      area: "Xã hội",
      content: "Tham gia trải nghiệm làm gốm",
      // tag: (
      //     <Tag color="#074979">IT</Tag>
      // ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 6,
      area: "Cá nhân",
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
      area: "Cá nhân",
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
      area: "Cá nhân",
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

  //Star
  const handleStarClick = (id) => {
    setDatas(
      datas.map((item) =>
        item.id === id ? { ...item, star: !item.star } : item
      )
    );
  };

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

  // Filtered data based on selected tag
  const filteredData = datas.filter(
    (item) =>
      selectedTag === "Tất cả nhãn" ||
      (item.tag && item.tag.props && item.tag.props.children === selectedTag)
  );

  // Render filtered data
  const getFilteredData = () => {
    if (selectedTag === "Tất cả nhãn") {
      return <ShowDataComponent data={datas} setDatas={setDatas} />;
    } else {
      return filteredData.map((item) => (
        <div className="target-list-wrap" key={item.id}>
          <div id="target-goalList-item">
            <div className="target-list-content">{item.content}</div>
            <div className="target-list-content-detail">
              <div className="target-list-tag">{item.tag}</div>
              <div className="target-list-date">{item.createdDate}</div>
              <div
                className="target-list-icon"
                onClick={() => handleStarClick(item.id)}
              >
                {item.star ? (
                  <StarFilled style={{ color: "gold" }} />
                ) : (
                  <StarOutlined />
                )}
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  // Effect to set default selected tag and trigger filter on initial load
  useEffect(() => {
    handleTagChange("Tất cả nhãn");
  }, []);

  return (
    <div className="target-list-frame">
      <div className="target-list-title">
        <div id="kpi-target-title">Mục tiêu KPI</div>
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

      {getFilteredData()}

      <div className="target-list-pagination-container">
        <Pagination
          // showQuickJumper
          defaultCurrent={1}
          total={50}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
}
export default Target_list;
