import NavbarOption from "../../../components/navbar/navbar-option";
import React, { useEffect, useRef } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./index.css";

const Setting = () => {
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
            <div>
              <Input
                defaultValue="Nguyễn Thị Hương Lan"
                style={{ color: "#074979", fontWeight: "700" }}
              />
            </div>
          </div>
          <div className="user-date">
            <div className="date-text">Năm sinh:</div>
            <Input
              defaultValue="10/10/1978"
              style={{ color: "#074979", fontWeight: "700" }}
            />
          </div>
          <div className="user-address">
            <div className="address-text">Địa chỉ:</div>
            <Input
              defaultValue="Ngõ 1 đường 30/4 phường A, Hà Nội"
              style={{ color: "#074979", fontWeight: "700" }}
            />
          </div>
          <div className="user-phone">
            <div className="phone-text">Điện thoại:</div>
            <Input
              defaultValue="0911617850"
              style={{ color: "#074979", fontWeight: "700" }}
            />
          </div>
        </div>
      </div>
      <div className="more-info">
        <div className="role-info">
          <div className="role-text">Vai trò:</div>
          <Input
            defaultValue="Giảng viên"
            style={{ color: "#074979", fontWeight: "700" }}
          />
        </div>
        <div className="univer-info">
          <div className="univer-text">Trường:</div>
          <Input
            defaultValue="Đại học Kinh tế Quốc dân"
            style={{ color: "#074979", fontWeight: "700" }}
          />
        </div>
        <div className="member-info">
          <div className="member-text">Thành viên:</div>
          <Input
            defaultValue="Thân thiết (có thời gian sử dụng trên 1 năm"
            style={{ color: "#074979", fontWeight: "700" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Setting;
