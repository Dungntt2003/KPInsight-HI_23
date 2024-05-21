import "./index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faPlusMinus,
  faCheck,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { SolutionOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

function SetKpiForm(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(2);
  // const handleCurrent = () => {
  //   switch (location.pathname) {
  //     case "/choose-option":
  //       return 0;
  //     case "/choose-month":
  //       return 1;
  //     case "/define-target":
  //       return 2;
  //     case "/define-goal":
  //       return 2;
  //     case "/turn-standard":
  //       return 3;
  //     case "/done":
  //       return 4;
  //   }
  // };
  const onChange = (value) => {
    setCurrent(value);
    switch (value) {
      case 0:
        navigate("/choose-option");
        break;
      case 1:
        navigate("/choose-month");
        break;

      case 2:
        navigate("/define-target");
        break;
      case 3:
        navigate("/turn-standard");
        break;
      case 4:
        navigate("/set-done");
        break;
    }
  };
  return (
    <div className="set-kpi-content" style={{ padding: "20px 30px" }}>
      <div className="set-kpi-step">
        <Steps
          current={current}
          onChange={onChange}
          className="set-kpi-step-item"
          style={{ display: "flex", alignItems: "center" }}
          items={[
            {
              title: "Chọn cách thiết lập",
              icon: (
                <div className="set-kpi-steps-icon">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="set-kpi-icon"
                  />
                </div>
              ),
            },
            {
              title: "Thiết lập",
              icon: (
                <div className="set-kpi-steps-icon">
                  <FontAwesomeIcon
                    icon={faPlusMinus}
                    className="set-kpi-icon"
                  />
                </div>
              ),
            },
            {
              title: "Xác định mục tiêu",
              icon: (
                <div className="set-kpi-steps-icon">
                  <SolutionOutlined className="set-kpi-icon" />,
                </div>
              ),
            },
            {
              title: "Quy chuẩn KPI",
              icon: (
                <div className="set-kpi-steps-icon">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="set-kpi-icon"
                  />
                </div>
              ),
            },
            {
              title: "Hoàn thành",
              icon: (
                <div className="set-kpi-steps-icon">
                  <FontAwesomeIcon icon={faCheck} className="set-kpi-icon" />
                </div>
              ),
            },
          ]}
        />
      </div>
      <div className="set-kpi-body">{props.component}</div>
    </div>
  );
}

export default SetKpiForm;
