import NavbarOption from "../../../../components/navbar/navbar-option";
import React, { useEffect, useRef } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./index.css";

const ChangePassword = () => {
  return (
    <div>
      <NavbarOption />;<div className="namepage-setting">Thay đổi mật khẩu</div>
    </div>
  );
};
export default ChangePassword;
