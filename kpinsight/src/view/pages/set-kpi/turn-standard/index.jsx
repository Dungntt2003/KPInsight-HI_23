import "./index.css";

import React, { useState, useMemo } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Form,
  Input,
  Space,
  Typography,
  Radio,
  Modal,
  Select,
} from "antd";
const { Paragraph } = Typography;
function TurnStandard() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [select, setSelect] = useState("");
  const showModal = (e) => {
    // console.log(e.target.value);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    // console.log(typeof value);
    setSelect(value);
  };

  return (
    <div className="turn-standard-container">
      <div className="turn-standard-wrap">
        <div className="turn-standard-heading">
          <h3 className="turn-standard-header">Xác định mục tiêu KPI</h3>
        </div>
        <div className="turn-standard-list">
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
                      className="turn-standard-card-big"
                      title={
                        <Form.Item
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          name={[field.name, "name"]}
                        >
                          <Input
                            className="turn-standard-label"
                            placeholder="Nhập lĩnh vực"
                          />
                        </Form.Item>
                      }
                      key={field.key}
                      // extra={
                      //   <CloseOutlined
                      //     onClick={() => {
                      //       remove(field.name);
                      //     }}
                      //   />
                      // }
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
                                flexDirection: "column",
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
                                      <Input
                                        className="turn-standard-input-act"
                                        placeholder="Nhập nhãn"
                                      />
                                    </Form.Item>
                                  }
                                  key={field1.key}
                                  style={{ width: "47%" }}
                                  // extra={
                                  //   <CloseOutlined
                                  //     onClick={() => {
                                  //       remove(field1.name);
                                  //     }}
                                  //   />
                                  // }
                                >
                                  <Form.Item>
                                    <Form.List name={[field1.name, "list"]}>
                                      {(subFields1, subOpt1) => (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            rowGap: 16,
                                            width: "100%",
                                          }}
                                        >
                                          {subFields1.map((subField1) => (
                                            <Space key={subField1.key}>
                                              <Form.Item
                                                noStyle
                                                style={{ width: "360px" }}
                                                name={[subField1.name, "first"]}
                                              >
                                                <Input
                                                  style={{ width: "340px" }}
                                                  value={subField1.first}
                                                  onClick={showModal}
                                                />
                                              </Form.Item>
                                              {/* <CloseOutlined
                                                onClick={() => {
                                                  subOpt1.remove(
                                                    subField1.name
                                                  );
                                                }}
                                              /> */}
                                            </Space>
                                          ))}

                                          {/* <Button
                                            type="dashed"
                                            onClick={() => subOpt1.add()}
                                            block
                                            className="turn-standard-btn-add-act"
                                          >
                                            + Thêm mục tiêu
                                          </Button> */}
                                        </div>
                                      )}
                                    </Form.List>
                                  </Form.Item>
                                </Card>
                              ))}

                              {/* <Button
                                type="dashed"
                                style={{ width: "60%", margin: "auto" }}
                                onClick={() => add()}
                                block
                                className="turn-standard-btn-add-label"
                              >
                                + Thêm nhãn
                              </Button> */}
                            </div>
                          )}
                        </Form.List>
                      </Form>
                    </Card>
                  ))}

                  {/* <Button type="dashed" onClick={() => add()} block>
                    + Thêm lĩnh vực
                  </Button> */}
                </div>
              )}
            </Form.List>
          </Form>
        </div>
      </div>
      <Modal
        title="Quy chuẩn KPI"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ minWidth: "900px" }}
      >
        <div className="turn-standard-tags">
          <div className="turn-standard-act-name">Tên hoạt động</div>
          <div className="turn-standard-act-detail">Chi tiết</div>
          <div className="turn-standard-act-unit">Đơn vị</div>
          <div className="turn-standard-act-time">Thời lượng</div>
        </div>
        <Form
          name="dynamic_form_nest_item"
          // onFinish={onFinish}
          style={{
            width: 850,
          }}
          autoComplete="off"
        >
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu tên hoạt động",
                        },
                      ]}
                    >
                      <Input placeholder="Tên hoạt động" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "detail"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu chi tiết",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Chọn cách thiết lập"
                        style={{
                          width: 300,
                        }}
                        onChange={handleChange}
                        options={[
                          {
                            value: "unit",
                            label: "Theo đơn vị cụ thể",
                          },
                          {
                            value: "task",
                            label: "Theo nhiệm vụ cụ thể",
                          },
                        ]}
                      />
                      <div className="turn-standard-max">
                        <Input placeholder="haha" />
                      </div>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <div
                    className="turn-standard-add-item"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      style={{ width: "50%" }}
                      icon={<PlusOutlined />}
                    >
                      Thêm hoạt động
                    </Button>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    </div>
  );
}

export default TurnStandard;
