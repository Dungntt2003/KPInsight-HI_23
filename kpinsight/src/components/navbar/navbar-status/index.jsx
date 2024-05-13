import React, { useState } from "react";
import "./index.css";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "04/2024",
  },
  {
    key: "2",
    label: "03/2024",
  },
  {
    key: "3",
    label: "02/2024",
  },
  {
    key: "sub1",
    label: "Xem thêm",
    children: [
      {
        key: "5",
        label: "01/2024",
      },
      {
        key: "6",
        label: "12/2023",
      },
      {
        key: "7",
        label: "11/2023",
      },
      {
        key: "8",
        label: "10/2023",
      },
    ],
  },
];

function NavbarStatus() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [openKeys, setOpenKeys] = useState([]);

  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    if (item && !item.children && !item.parentKey) {
      // Kiểm tra nếu item không có children và không phải là children của item khác
      setOpenKeys([]); // Đóng các item khác đang mở với children
    }
    setSelectedKey(key); // Lưu trữ key của item được click

    // Nếu item có children, thay đổi trạng thái mở/closed của item đó

    if (item && item.children) {
      if (openKeys.includes(key)) {
        setOpenKeys(openKeys.filter((k) => k !== key)); // Đóng item nếu nó đã mở
      } else {
        setOpenKeys([...openKeys, key]); // Mở item nếu nó đã đóng
      }
    }
  };

  return (
    <div className="navbar-menu-container">
      <h1 className="navbar-name">Giai đoạn</h1>
      {items.map((item) => (
        <div key={item.key}>
          <div
            className={`navbar-menu-item ${
              selectedKey === item.key ? "selected" : ""
            } ${item.children ? "has-children" : ""} ${
              openKeys.includes(item.key) ? "open" : ""
            }`}
            onClick={() => handleItemClick(item.key)}
          >
            {item.label}
            {item.key === "sub1" && <DownOutlined className="downicon" />}{" "}
            {/* Thêm biểu tượng mũi tên xuống sau "Xem thêm" */}
          </div>
          {/* Hiển thị children nếu item có children và nó đang mở */}
          {item.children && openKeys.includes(item.key) && (
            <div className="navbar-submenu">
              {item.children.map((child) => (
                <div
                  key={child.key}
                  className={`navbar-menu-item child-item ${
                    selectedKey === child.key ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(child.key)}
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
