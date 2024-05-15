import "./index.css";

import React, { useState, useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Typography, Radio } from "antd";
const { Paragraph } = Typography;
function DefineTarget() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  return (
    <div className="define-target-container">
      <div className="define-target-wrap">
        <div className="define-target-heading">
          <h3 className="define-target-header">Xác định mục tiêu KPI</h3>
        </div>
        <div className="define-target-list">
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            form={form1}
            name="dynamic_form_complex_one"
            style={{
              maxWidth: "100%",
            }}
            autoComplete="off"
            initialValues={{
              items: [
                {
                  name: "Học tập",
                },
                {
                  name: "Cá nhân",
                },
              ],
            }}
          >
            <Form.List name="items">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map((field) => (
                    <Card
                      size="small"
                      className="define-target-card-big"
                      title={
                        <Form.Item
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          name={[field.name, "name"]}
                        >
                          <Input className="define-target-label" />
                        </Form.Item>
                      }
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      }
                    >
                      <Form
                        labelCol={{
                          span: 6,
                        }}
                        wrapperCol={{
                          span: 18,
                        }}
                        form={form2}
                        name="dynamic_form_complex-two"
                        style={{
                          maxWidth: "100%",
                        }}
                        autoComplete="off"
                        initialValues={{
                          items: [
                            {
                              name: "IT",
                              list: [
                                {
                                  first: "Hoàn thành khóa học ReactJs",
                                },
                                {
                                  first:
                                    "Đạt giải cuộc thi Shecodes tháng 9/2024",
                                },
                                {
                                  first: "Thiết kế component ở figma",
                                },
                              ],
                            },
                            {
                              name: "Ngoại ngữ",
                              list: [
                                {
                                  first: "Đạt chứng chỉ Toeic 500+",
                                },
                                {
                                  first: "Học xong từ vựng N3",
                                },
                              ],
                            },
                          ],
                        }}
                      >
                        <Form.List name="items">
                          {(fields1, { add, remove }) => (
                            <div
                              style={{
                                display: "flex",
                                rowGap: 16,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                              }}
                            >
                              {fields1.map((field1) => (
                                <Card
                                  size="small"
                                  title={
                                    <Form.Item
                                      name={[field1.name, "name"]}
                                      noStyle
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Input className="define-target-input-act" />
                                    </Form.Item>
                                  }
                                  key={field1.key}
                                  style={{ minWidth: "450px" }}
                                  extra={
                                    <CloseOutlined
                                      onClick={() => {
                                        remove(field1.name);
                                      }}
                                    />
                                  }
                                >
                                  <Form.Item>
                                    <Form.List name={[field1.name, "list"]}>
                                      {(subFields1, subOpt1) => (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            rowGap: 16,
                                            width: "480px",
                                          }}
                                        >
                                          {subFields1.map((subField1) => (
                                            <Space key={subField1.key}>
                                              <Form.Item
                                                noStyle
                                                style={{ width: "480px" }}
                                                name={[subField1.name, "first"]}
                                              >
                                                <Input
                                                  style={{ width: "450px" }}
                                                  value={subField1.first}
                                                />
                                              </Form.Item>
                                              <CloseOutlined
                                                onClick={() => {
                                                  subOpt1.remove(
                                                    subField1.name
                                                  );
                                                }}
                                              />
                                            </Space>
                                          ))}
                                          <Button
                                            type="dashed"
                                            onClick={() => subOpt1.add()}
                                            block
                                            className="define-target-btn-add-act"
                                          >
                                            + Thêm mục tiêu
                                          </Button>
                                        </div>
                                      )}
                                    </Form.List>
                                  </Form.Item>
                                </Card>
                              ))}

                              <Button
                                type="dashed"
                                style={{ width: "60%", margin: "auto" }}
                                onClick={() => add()}
                                block
                                className="define-target-btn-add-label"
                              >
                                + Thêm nhãn
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form>
                    </Card>
                  ))}

                  <Button type="dashed" onClick={() => add()} block>
                    + Thêm lĩnh vực
                  </Button>
                </div>
              )}
            </Form.List>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DefineTarget;
