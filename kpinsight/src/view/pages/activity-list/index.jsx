import "./index.css";
import React, { useState } from "react";
import { Select, Col, Row, Pagination, Tag } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import NavbarStatus from "../../../components/navbar/navbar-status";
import ShowActivitiesComponent from "./show-activities";

function ActivityList() {
  //Data
  const [activities, setActivities] = useState([
    {
      id: 0,
      content: "Học thiết kế Web",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/08/01",
      createTime: "5:00",
      quantity: "300/300",
      star: true,
    },
    {
      id: 1,
      content: "Học thiết kế bằng Figma",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
    {
      id: 2,
      content: "Học thiết kế bằng Figma2",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
    {
      id: 3,
      content: "Học thiết kế bằng Figma3",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
    {
      id: 4,
      content: "Học thiết kế bằng Figma4",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
    {
      id: 5,
      content: "Học thiết kế bằng Figma5",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
    {
      id: 6,
      content: "Học thiết kế bằng Figma6",
      tag1: (
        <Tag id="" color="#074979">
          Đã hoàn thành
        </Tag>
      ),
      tag2: <Tag color="volcano">IT</Tag>,
      createdDate: "2024/04/01",
      createTime: "40:00",
      quantity: "15/15",
      star: true,
    },
  ]);

  //Choose label - select
  const handleLabel = (value) => {
    console.log(value);
  };

  //Pagigation
  const [current, setCurrent] = useState(1);
  const handlePagination = (page) => {
    console.log(page);
    setCurrent(page);
  };

  //Star
  const handleStarClick = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, star: !activity.star } : activity
      )
    );
  };

  return (
    <div className="activity-list-container">
      <NavbarStatus />
      <div className="activity-list-frame">
        <span id="activity-list-select-container">
          <Select
            defaultValue="Tất cả nhãn"
            style={{
              width: 150,
            }}
            onChange={handleLabel}
            options={[
              {
                label: <span>Tất cả nhãn</span>,
                value: "Tất cả nhãn",
              },
              {
                label: <span>Học tập</span>,
                title: "Học tập",
                options: [
                  {
                    label: <span>IT</span>,
                    value: "IT",
                  },
                  {
                    label: <span>Ngoại ngữ</span>,
                    value: "Ngoại ngữ",
                  },
                ],
              },
              {
                label: <span>Xã hội</span>,
                title: "Xã hội",
                options: [
                  {
                    label: <span>CLB</span>,
                    value: "CLB",
                  },
                ],
              },
              {
                label: <span>Cá nhân</span>,
                title: "Cá nhân",
                options: [
                  {
                    label: <span>Sức khỏe</span>,
                    value: "Sức khỏe",
                  },
                  {
                    label: <span>Gia đình</span>,
                    value: "Gia đình",
                  },
                  {
                    label: <span>Tài chính</span>,
                    value: "Tài chính",
                  },
                ],
              },
            ]}
          />
        </span>
        {/* <span className="activity-list-grid-container">
          <span>Horizontal Gutter (px): </span>
          <div
            style={{
              width: "50%",
            }}
          >
            <Slider
              min={0}
              max={Object.keys(gutters).length - 1}
              value={gutterKey}
              onChange={setGutterKey}
              marks={gutters}
              step={null}
              tooltip={{
                formatter: (value) => gutters[value],
              }}
            />
          </div>
          <span>Vertical Gutter (px): </span>
          <div
            style={{
              width: "50%",
            }}
          >
            <Slider
              min={0}
              max={Object.keys(vgutters).length - 1}
              value={vgutterKey}
              onChange={setVgutterKey}
              marks={vgutters}
              step={null}
              tooltip={{
                formatter: (value) => vgutters[value],
              }}
            />
          </div>
          <span>Column Count:</span>
          <div
            style={{
              width: "50%",
              marginBottom: 48,
            }}
          >
            <Slider
              min={0}
              max={Object.keys(colCounts).length - 1}
              value={colCountKey}
              onChange={setColCountKey}
              marks={colCounts}
              step={null}
              tooltip={{
                formatter: (value) => colCounts[value],
              }}
            />
          </div>
          <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
            {cols}
            {cols}
          </Row>
          Another Row:
          <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
          <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
          <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
        </span> */}
        <div className="activity-list-grid-container" style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={0}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={1}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={2}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={3}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={4}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">
                <ShowActivitiesComponent
                  id={5}
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </Col>
          </Row>
        </div>

        <span className="act-pagi">
          <Pagination
            // showQuickJumper
            defaultCurrent={1}
            total={50}
            onChange={handlePagination}
          />
        </span>
      </div>
    </div>
  );
}

export default ActivityList;
