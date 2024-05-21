import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const ShowActivityComponent = ({ id, activities, setActivities }) => {
  //Star
  const handleStarClick = (id) => {
    setActivities(
      activities.map((item) =>
        item.id === id ? { ...item, star: !item.star } : item
      )
    );
  };

  // Tìm hoạt động có id truyền vào
  const activity = activities.find((activity) => activity.id === id);

  if (!activity) {
    return <div>Không tìm thấy hoạt động</div>;
  }

  return (
    <div id="act-list-item">
      <div className="act-list-content-detail">
        <div className="act-list-tag">{activity.tag1}</div>
        <div
          className="act-list-star"
          onClick={() => handleStarClick(activity.id)}
        >
          {activity.star ? (
            <StarFilled style={{ color: "gold" }} />
          ) : (
            <StarOutlined />
          )}
        </div>
        <div className="act-list-date">{activity.createdDate}</div>
        <div className="act-list-time">{activity.createTime}</div>
        <div className="act-list-quantity">{activity.quantity}</div>
      </div>
    </div>
  );
};

export default ShowActivityComponent;
