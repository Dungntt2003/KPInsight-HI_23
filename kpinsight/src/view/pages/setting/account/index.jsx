import NavbarOption from "../../../../components/navbar/navbar-option";
import React, { useEffect, useRef } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import "./index.css";

const SettingAccount = () => {
  return (
    <div>
      <NavbarOption />;
      <div className="namepage-logout">
        <div className="namepage-setting">Thông tin cơ bản</div>
        <div className="log-out">
          <LogoutOutlined />
          <div className="log-out-text">Đăng xuất</div>
        </div>
      </div>
      <div>
        <div className="account-wrap">
          <div className="account-container">
            <div className="account-pic">
              <img
                className="avt-img"
                src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                alt="Oops! Something went wrong"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="change-img">Thay ảnh đại diện</div>
          </div>
          <div className="user-info">
            <div className="user-name">
              <div className="name-text">Họ và tên:</div>
              <div className="user-input">
                <Input
                  defaultValue="Nguyễn Thị Hương Lan"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-date">
              <div className="date-text">Năm sinh:</div>
              <div className="user-input">
                <Input
                  defaultValue="10/10/1978"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-address">
              <div className="address-text">Địa chỉ:</div>
              <div className="user-input">
                {" "}
                <Input
                  defaultValue="Ngõ 1 đường 30/4 phường A, Hà Nội"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-phone">
              <div className="phone-text">Điện thoại:</div>
              <div className="user-input">
                <Input
                  defaultValue="0911617850"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="more-info">
          <div className="role-info">
            <div className="role-text">Vai trò:</div>
            <div
              className="role-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Giảng viên
            </div>
          </div>
          <div className="univer-info">
            <div className="univer-text">Trường:</div>
            <div
              className="univer-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Đại học Kinh tế Quốc dân
            </div>
          </div>
          <div className="member-info">
            <div className="member-text">Thành viên:</div>
            <div
              className="member-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Thân thiết (có thời gian sử dụng trên 1 năm)
            </div>
          </div>
        </div>
        <Button type="primary" htmlType="submit" className="update-info">
          Cập nhật thông tin
        </Button>
      </div>
    </div>
  );
};
export default SettingAccount;
