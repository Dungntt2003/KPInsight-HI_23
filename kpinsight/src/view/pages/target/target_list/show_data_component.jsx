import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";

const ShowDataComponent = ({ data, setDatas }) => {
  //Group by area
  const groupedData = data.reduce((acc, item) => {
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

  return (
    // <div className="data-list">
    //   {Object.keys(groupedData).map((area) => (
    //     <div key={area} className="data-area">
    //       <h2>{area}</h2>
    //       {groupedData[area].map((item) => (
    //         <div key={item.id} className="data-item">
    //           <div className="data-item-content">
    //             <div className="data-item-header">
    //               <p>{item.content}</p>
    //               {item.star ? (
    //                 <StarFilled style={{ color: "#fadb14" }} />
    //               ) : (
    //                 <StarOutlined />
    //               )}
    //             </div>
    //             <div className="data-item-footer">
    //               {item.tag}
    //               <span className="data-item-date">{item.createdDate}</span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    <div>
      {Object.keys(groupedData).map((area) => (
        <div key={area} className="target-list-wrap">
          <div className="target-list-title">
            <div id="goal-list-title">{area}</div>
            <Link
              to="/target_detail"
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link>
            <LocalizedModal className="target-list-icon" />
          </div>

          <div className="target-list-item">
            {groupedData[area].map((item) => (
              <div key={item.id} id="target-goalList-item">
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
            ))}

            <Link
              to="/target_detail"
              className="target-list-icon"
              id="target-list-see-more"
            >
              <EllipsisOutlined />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDataComponent;
