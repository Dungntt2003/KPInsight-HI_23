import "./index.css";
import React, { useState } from "react";
import { Select, Col, Row, Pagination } from "antd";
import NavbarStatus from "../../../components/navbar/navbar-status";

function ActivityList() {
  //Choose label - select
  const handleLabel = (value) => {
    console.log(value);
  };

  //Pagination
  const showTotalPage = (totalPage) => `Total ${totalPage} items`;

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
              <div id="act-list-col">Column 1</div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">Column 2</div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">Column 3</div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div id="act-list-col">Column 4</div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">Column 5</div>
            </Col>
            <Col span={8}>
              <div id="act-list-col">Column 6</div>
            </Col>
          </Row>
        </div>
        <span className="act-pagi">
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </span>
      </div>
    </div>
  );
}

export default ActivityList;
