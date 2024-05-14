import "./index.css";
import NavbarGoal from "../../../../components/navbar/navbar-goal";
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
import { useNavigate } from "react-router-dom";

function SetKpiForm(props) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(2);
  const onChange = (value) => {
    setCurrent(value);
    switch (value) {
      case 0:
        navigate("/choose-option");
        break;
      case 1:
        navigate("/choose-month");
        break;
      case 4:
        navigate("/set-done");
        break;
    }
  };
  return (
    <div className="set-kpi-container">
      <div className="set-kpi-navbar">
        <NavbarGoal />
      </div>
      <div className="set-kpi-content">
        <div className="set-kpi-step">
          <Steps
            current={current}
            onChange={onChange}
            className="set-kpi-step-item"
            items={[
              {
                title: "Chọn cách thiết lập",
                icon: (
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="set-kpi-icon"
                  />
                ),
              },
              {
                title: "Thiết lập",
                icon: (
                  <FontAwesomeIcon
                    icon={faPlusMinus}
                    className="set-kpi-icon"
                  />
                ),
              },
              {
                title: "Xác định mục tiêu",
                icon: <SolutionOutlined className="set-kpi-icon" />,
              },
              {
                title: "Quy chuẩn KPI",
                icon: (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="set-kpi-icon"
                  />
                ),
              },
              {
                title: "Hoàn thành",
                icon: (
                  <FontAwesomeIcon icon={faCheck} className="set-kpi-icon" />
                ),
              },
            ]}
          />
        </div>
        <div className="set-kpi-body">{props.component}</div>
      </div>
    </div>
  );
}

export default SetKpiForm;
