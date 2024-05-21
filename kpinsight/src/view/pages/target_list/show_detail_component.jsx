import "./index.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  Tag,
  message,
  Popconfirm,
  Button,
  Checkbox,
  Modal,
} from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  StarOutlined,
  StarFilled,
  DeleteOutlined,
} from "@ant-design/icons";

const ShowDetailComponent = ({ Area, data, setDatas }) => {
  // Filter data by selectedArea
  const filteredData = data.filter((item) => item.area === Area);

  //Group by area (though in this case we only have one area)
  const groupedData = filteredData.reduce((acc, item) => {
    (acc[item.area] = acc[item.area] || []).push(item);
    return acc;
  }, {});

  //Star
  const handleStarClick = (id) => {
    setDatas(
      data.map((item) =>
        item.id === id ? { ...item, star: !item.star } : item
      )
    );
  };

  //Pop confirm
  const confirmPop = (e) => {
    console.log(e);
    message.success("Đã xóa mục tiêu!");
  };
  const cancelPop = (e) => {
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

  //Check box
  // const CheckboxGroup = Checkbox.Group;
  // const plainOptionsCheckbox = studies.map((study) => study.content);
  // const defaultCheckedList = studies.map((study) => study.checked);
  // const [checkedList, setCheckedList] = useState(defaultCheckedList);
  // const checkAll = plainOptionsCheckbox.length === checkedList.length;
  // const indeterminate =
  //   checkedList.length > 0 && checkedList.length < plainOptionsCheckbox.length;
  // const onChangeCheckBox = (list) => {
  //   setCheckedList(list);
  // };
  // const onCheckAllChange = (e) => {
  //   setCheckedList(e.target.checked ? plainOptionsCheckbox : []);
  // };

  const [checkedItems, setCheckedItems] = useState(
    data.filter((data) => data.checked).map((data) => data.id)
  );
  const onChangeCheckBox = (e, itemId) => {
    console.log(`checked = ${e.checked}`);
    setCheckedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div>
      {Object.keys(groupedData).map((area) => (
        <div key={area} className="target-list-wrap">
          <div className="target-list-title">
            <div id="goal-list-title">{area}</div>
            <LocalizedModal className="target-list-icon" />
          </div>

          <div className="target-list-item">
            {groupedData[area].map((item) => (
              <div key={item.id} id="target-goalList-item">
                <Checkbox
                  id="target-goalList-item-checkbox"
                  onChangeCheckBox={() => onChangeCheckBox(item.id)}
                  checked={checkedItems.includes(item.id)}
                >
                  <div
                    className="target-list-content"
                    style={{
                      textDecoration: checkedItems.includes(item.id)
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.content}
                  </div>
                </Checkbox>
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
                  <Popconfirm
                    placement="bottomLeft"
                    title="Xóa mục tiêu"
                    description="Xác nhận xóa mục tiêu"
                    onConfirm={confirmPop}
                    onCancel={cancelPop}
                    okText="Xác nhận"
                    cancelText="Hủy"
                  >
                    <div className="target-list-icon">
                      <DeleteOutlined style={{ color: "black" }} />
                    </div>
                  </Popconfirm>
                </div>
              </div>
            ))}

            <Link to="/target_list" id="target-list-link">
              <Button id="target-detail-btn">Lưu và Thoát</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDetailComponent;
