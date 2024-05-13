import React, { useState } from "react";
import "./index.css";
import {
  UnorderedListOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
const items = [
  {
    key: "1",
    icon: <VerticalRightOutlined />,
    label: "Thiết lập KPI",
  },
  {
    key: "2",
    icon: <UnorderedListOutlined />,
    label: "Danh sách mục tiêu",
  },
];

function NavbarGoal() {
  const [selectedKey, setSelectedKey] = useState(null);
  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    setSelectedKey(key);
  };
  return (
    <div className="navbar-goal-container">
      <div className="navbar-goal-frame">
        {items.map((item) => (
          <div key={item.key}>
            <div
              className={`navbar-goal-item ${
                selectedKey === item.key ? "navbar-selected" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="icon"> {item.icon}</span>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavbarGoal;
