import React, { useState } from "react";
import "./index.css";
import {
  UserOutlined,
  KeyOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Tài khoản",
  },
  {
    key: "2",
    icon: <KeyOutlined />,
    label: "Đổi mật khẩu",
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Cài đặt chung",
  },
  {
    key: "4",
    icon: <QuestionCircleOutlined />,
    label: "Trợ giúp",
  },
];

function NavbarOption() {
  const [selectedKey, setSelectedKey] = useState(null);
  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    setSelectedKey(key); // Lưu trữ key của item được click
  };
  return (
    <div className="navbar-option-container">
      <div className="navbar-frame">
        {items.map((item) => (
          <div key={item.key}>
            <div
              className={`navbar-item ${
                selectedKey === item.key ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <div>
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

export default NavbarOption;
