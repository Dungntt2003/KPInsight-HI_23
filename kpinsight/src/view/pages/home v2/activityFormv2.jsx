import React, { useState } from "react";
import { Button, Checkbox, Form, Modal, Select, Input, TimePicker } from "antd";
import "./index.css";

const { Option } = Select;
const { TextArea } = Input;

const ActivityForm = ({ visible, onCancel, activities }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [notes, setNotes] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedTag("");
    setSelectedActivity("");
    setSelectedActivities([]);
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
    setSelectedActivity("");
    setSelectedActivities([]);
  };

  const handleActivitySelect = (value) => {
    setSelectedActivity(value);
    setSelectedActivities([]);
  };

  const handleActivityChange = (activityId) => {
    const index = selectedActivities.indexOf(activityId);
    if (index === -1) {
      setSelectedActivities([...selectedActivities, activityId]);
    } else {
      setSelectedActivities(
        selectedActivities.filter((id) => id !== activityId)
      );
    }
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleSubmit = () => {
    if (selectedActivities.length === 0) {
      alert("Vui lòng chọn ít nhất một hoạt động.");
    } else {
      console.log("Selected activities:", selectedActivities);
      console.log("Notes:", notes);
      console.log("Start time:", startTime ? startTime.format("HH:mm") : "");
      console.log("End time:", endTime ? endTime.format("HH:mm") : "");
      onCancel();
    }
  };

  const categories = {
    "Học tập": ["IT", "Ngoại ngữ"],
    "Xã hội": ["Tình nguyện"],
    "Cá nhân": ["Tài chính", "Sức khỏe", "Gia đình"],
  };
  return (
    <Modal
      title="Thêm hoạt động"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Thêm
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Chọn chủ đề">
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            {Object.keys(categories).map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {selectedCategory && (
          <Form.Item label="Chọn tag">
            <Select value={selectedTag} onChange={handleTagChange}>
              {categories[selectedCategory].map((tag) => (
                <Option key={tag} value={tag}>
                  {tag}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        {selectedTag && (
          <Form.Item label="Chọn hoạt động">
            <Select value={selectedActivity} onChange={handleActivitySelect}>
              {activities
                .filter((activity) => activity.tag === selectedTag)
                .map((activity) => (
                  <Option key={activity.id} value={activity.id}>
                    {activity.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        )}

        {selectedActivity && (
          <Form.Item label="Danh sách task">
            {activities
              .filter((activity) => activity.id === selectedActivity)
              .map((activity) => (
                <div key={activity.id} className="actForm">
                  <Checkbox
                    checked={selectedActivities.includes(activity.id)}
                    onChange={() => handleActivityChange(activity.id)}
                  >
                    {activity.task}
                  </Checkbox>
                </div>
              ))}
          </Form.Item>
        )}

        <Form.Item label="Chọn thời gian">
          <TimePicker
            value={startTime}
            onChange={handleStartTimeChange}
            format="HH:mm"
            placeholder="Thời gian bắt đầu"
            style={{ marginRight: 10 }}
          />
          <TimePicker
            value={endTime}
            onChange={handleEndTimeChange}
            format="HH:mm"
            placeholder="Thời gian kết thúc"
          />
        </Form.Item>

        <Form.Item label="Ghi chú">
          <TextArea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ActivityForm;
