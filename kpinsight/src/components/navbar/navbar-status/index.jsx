import React, { useState } from "react";
import "./index.css";
import { DownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "04/2024", month: 4 },
  { key: "2", label: "03/2024", month: 3 },
  { key: "3", label: "02/2024", month: 2 },
  {
    key: "sub1",
    label: "Xem thêm",
    children: [
      { key: "5", label: "01/2024", month: 1 },
      { key: "6", label: "12/2023", month: 12 },
      { key: "7", label: "11/2023", month: 11 },
      { key: "8", label: "10/2023", month: 10 },
    ],
  },
];

function NavbarStatus({ onMonthChange }) {
  const [selectedKey, setSelectedKey] = useState("1");
  const [openKeys, setOpenKeys] = useState([]);

  const handleItemClick = (key, month) => {
    const item = items.find((item) => item.key === key);
    if (item && !item.children && !item.parentKey) {
      setOpenKeys([]);
    }
    setSelectedKey(key);
    if (onMonthChange) onMonthChange(month);
    if (item && item.children) {
      if (openKeys.includes(key)) {
        setOpenKeys(openKeys.filter((k) => k !== key));
      } else {
        setOpenKeys([...openKeys, key]);
      }
    }
  };

  return (
    <div className="navbar-menu-container">
      <h1 className="navbar-name">Giai đoạn</h1>
      {items.map((item) => (
        <div
          key={item.key}
          className={item.children ? "navbar-status-more" : ""}
        >
          <div
            className={`navbar-item ${
              selectedKey === item.key ? "selected" : ""
            } ${item.children ? "has-children" : ""} ${
              openKeys.includes(item.key) ? "open" : ""
            }`}
            onClick={() => handleItemClick(item.key, item.month)}
          >
            {item.key === "sub1" && openKeys.includes(item.key)
              ? "Thu gọn"
              : item.label}
            {item.key === "sub1" && (
              <DownOutlined
                className={`downicon ${
                  openKeys.includes(item.key) ? "rotate" : ""
                }`}
              />
            )}
          </div>
          {item.children && openKeys.includes(item.key) && (
            <div className="navbar-submenu">
              {item.children.map((child) => (
                <div
                  key={child.key}
                  className={`navbar-menu-item child-item ${
                    selectedKey === child.key ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(child.key, child.month)}
                >
                  {child.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavbarStatus;
