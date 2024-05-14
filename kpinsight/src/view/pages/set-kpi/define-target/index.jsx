import "./index.css";

import React, { useState, useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Typography, Radio } from "antd";
const { Paragraph } = Typography;
function DefineTarget() {
  const [clickTriggerStr, setClickTriggerStr] = useState("");
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const radioToState = (input) => {
    switch (input) {
      case "text":
        return ["text"];
      case "both":
        return ["icon", "text"];
      case "icon":
      default:
        return ["icon"];
    }
  };
  const [chooseTrigger, setChooseTrigger] = useState(["icon"]);
  const stateToRadio = useMemo(() => {
    if (chooseTrigger.includes("text")) {
      return chooseTrigger.includes("icon") ? "both" : "text";
    }
    return "icon";
  }, [chooseTrigger]);
  return (
    <div className="define-target-container">
      <div className="define-target-wrap">
        <div className="define-target-heading">
          <h3 className="define-target-header">Xác định mục tiêu KPI</h3>
        </div>
        <div className="define-target-list">
          <Radio.Group
            onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
            value={stateToRadio}
          >
            <Radio value="icon">icon</Radio>
            <Radio value="text">text</Radio>
            <Radio value="both">both</Radio>
          </Radio.Group>
          <Paragraph
            editable={{
              tooltip: "click to edit text",
              onChange: setClickTriggerStr,
              triggerType: chooseTrigger,
            }}
          >
            {clickTriggerStr}
          </Paragraph>
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
              items: [{}],
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
                      title={
                        <Form.Item label="Title" name={[field.title, "title"]}>
                          <Input />
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
                          items: [{}],
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
                                  title={`Item ${field1.name + 1}`}
                                  key={field1.key}
                                  style={{ minWidth: "400px" }}
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
                                            width: "350px",
                                          }}
                                        >
                                          {subFields1.map((subField1) => (
                                            <Space key={subField1.key}>
                                              <Form.Item
                                                noStyle
                                                style={{ width: "350px" }}
                                                name={[subField1.name, "first"]}
                                              >
                                                <Input
                                                  style={{ width: "350px" }}
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
