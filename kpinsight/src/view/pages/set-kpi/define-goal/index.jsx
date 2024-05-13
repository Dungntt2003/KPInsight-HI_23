import "./index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Tag } from "antd";
const data = [
  {
    date: "2024-03-12",
    time: "01:10",
    description: "Xác định 1 mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-11",
    time: "23:11",
    description: "Xác định 3 mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-10",
    time: "02:10",
    description: "Thêm 12 hoạt động giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-09",
    time: "10:11",
    description: "Thêm 2 hoạt động cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-01",
    time: "01:10",
    description: "Hoàn thành xác lập mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-02-29",
    time: "23:20",
    description: "Hoàn thành KPI giai đoạn tháng 2/2024",
  },
];
const dataPlus = [
  {
    date: "2024-03-12",
    time: "01:10",
    description: "Xác định 1 mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-11",
    time: "23:11",
    description: "Xác định 3 mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-10",
    time: "02:10",
    description: "Thêm 12 hoạt động giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-09",
    time: "10:11",
    description: "Thêm 2 hoạt động cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-03-01",
    time: "01:10",
    description: "Hoàn thành xác lập mục tiêu cho giai đoạn tháng 3/2024",
  },
  {
    date: "2024-02-29",
    time: "23:20",
    description: "Hoàn thành KPI giai đoạn tháng 2/2024",
  },
];

function DefineGoal() {
  const [dataList, setDataList] = useState([data]);
  const handleClick = () => {
    if (dataList === data) {
      setDataList(data.concat(dataPlus));
    } else setDataList(data);
  };
  return (
    <div className="define-body">
      <div className="define-history">
        <div className="define-heading">
          <h3 className="define-header">Lịch sử thiết lập</h3>
        </div>
        <div className="define-list">
          <div className="define-list-box">
            {dataList.map((item, index) => {
              return (
                <div className="define-list-wrap">
                  <div className="define-list-date">{item.date}</div>
                  <div className="define-list-time">{item.time}</div>
                  <div className="define-list-description">
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="define-collapse">
            <FontAwesomeIcon icon={faAnglesDown} onClick={handleClick} />
          </div>
          <div className="define-btn">
            <Button type="primary" className="define-button">
              Thiết lập lại
            </Button>
            <Button type="primary" className="define-button">
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
      <div className="define-form">
        <div className="define-heading">
          <div className="define-header">Mẫu mục tiêu</div>
        </div>
        <div className="define-card-form">
          <Card
            title="Tình nguyện"
            bordered={true}
            style={{
              width: "30%",
              border: "2px solid #074979",
            }}
          >
            <p>
              Tích cực tham gia CLB sách <Tag color="magenta">CLB</Tag>
            </p>
            <p>Tham gia tình nguyện "Mùa hè xanh"</p>
            <p>Trải nghiệm làm gốm</p>
          </Card>
          <Card
            title="Cá nhân"
            bordered={true}
            style={{
              width: "30%",
              border: "2px solid #074979",
            }}
          >
            <p>
              Chăm sóc sức khỏe <Tag color="magenta">Sức khỏe</Tag>
            </p>
            <p>
              Dành thời gian cho gia đình <Tag color="red">Gia đình</Tag>
            </p>
            <p>
              Quản lý chi tiêu <Tag color="orange">Tài chính</Tag>
            </p>
          </Card>
          <Card
            title="Học tập"
            bordered={true}
            style={{
              width: "30%",
              border: "2px solid #074979",
            }}
          >
            <p>
              Đạt chứng chỉ Toeic 500+ <Tag color="magenta">Ngoại ngữ</Tag>
            </p>
            <p>
              Đạt giải cuộc thi Shecodes 2024 <Tag color="red">IT</Tag>
            </p>
            <p>
              Học khóa Nodejs <Tag color="orange">IT</Tag>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DefineGoal;
