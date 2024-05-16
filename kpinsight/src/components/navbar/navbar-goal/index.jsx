import React, { useState } from "react";
import "./index.css";
import {
  UnorderedListOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <VerticalRightOutlined />,
    label: "Thiết lập KPI",
  },
  {
    key: "2",
    icon: <UnorderedListOutlined />,
    label: "Mục tiêu",
  },
];

function NavbarGoal() {
  const [selectedKey, setSelectedKey] = useState(null);
  const navigate = useNavigate();
  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    setSelectedKey(key);
    if (key === "1") navigate("/define-goal");
    else if (key === "2") navigate("/target_list");
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
