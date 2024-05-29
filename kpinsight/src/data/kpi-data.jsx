// kpi-data.jsx

const kpiData = [
  {
    month: 4,
    tag: "IT",
    label: "Học thiết kế giao diện",
    score: 4,
    max: 5,
    min: 2,
    averageTime: 2,
    unit: "nhiệm vụ",
  },
  {
    month: 4,
    tag: "IT",
    label: "Làm Project GR1",
    score: 2,
    max: 5,
    min: 3,
    averageTime: 3.2,
    unit: "nhiệm vụ",
  },
  {
    month: 4,
    tag: "IT",
    label: "Học ReactJS",
    score: 34,
    max: 20,
    min: 7,
    averageTime: 0.33,
    unit: "bài",
  },
  {
    month: 4,
    tag: "IT",
    label: "Làm BT ITSS",
    score: 10,
    max: 7,
    min: 5,
    averageTime: 0.33,
    unit: "bài",
  },
  {
    month: 4,
    tag: "IT",
    label: "Code màn Figma",
    score: 1,
    max: 6,
    min: 4,
    averageTime: 4.75,
    unit: "màn",
  },
  {
    month: 4,
    tag: "IT",
    label: "Học Git",
    score: 6,
    max: 11,
    min: 4,
    averageTime: 0.66,
    unit: "bài",
  },
  {
    month: 4,
    tag: "Ngoại ngữ",
    label: "Học từ vựng tiếng Nhật",
    score: 120,
    max: 300,
    min: 50,
    averageTime: 0.25,
    unit: "từ",
  },
  {
    month: 4,
    tag: "Ngoại ngữ",
    label: "Học ngữ pháp N3",
    score: 8,
    max: 10,
    min: 4,
    averageTime: 1,
    unit: "bài",
  },
  {
    month: 4,
    tag: "Ngoại ngữ",
    label: "Shadowing",
    score: 2,
    max: 10,
    min: 6,
    averageTime: 0.5,
    unit: "bài",
  },

  //Tháng 3
  {
    month: 3,
    tag: "IT",
    label: "Làm Project GR1",
    score: 4,
    max: 5,
    min: 3,
    averageTime: 3,
    unit: "nhiệm vụ",
  },
  {
    month: 3,
    tag: "IT",
    label: "Học ReactJS",
    score: 34,
    max: 20,
    min: 7,
    averageTime: 0.33,
    unit: "bài",
  },
  {
    month: 3,
    tag: "IT",
    label: "Làm BT Quản trị",
    score: 30,
    max: 28,
    min: 7,
    averageTime: 0.5,
    unit: "bài",
  },
  {
    month: 3,
    tag: "IT",
    label: "Học Git",
    score: 6,
    max: 11,
    min: 4,
    averageTime: 0.66,
    unit: "bài",
  },
  {
    month: 3,
    tag: "Ngoại ngữ",
    label: "Học từ vựng tiếng Nhật",
    score: 120,
    max: 300,
    min: 50,
    averageTime: 0.25,
    unit: "từ",
  },
  {
    month: 3,
    tag: "Ngoại ngữ",
    label: "Học ngữ pháp N3",
    score: 8,
    max: 10,
    min: 4,
    averageTime: 1,
    unit: "bài",
  },
  {
    month: 3,
    tag: "Ngoại ngữ",
    label: "Shadowing",
    score: 5,
    max: 10,
    min: 6,
    averageTime: 0.5,
    unit: "bài",
  },
  {
    month: 3,
    tag: "Gia đình",
    label: "Mua quà tặng gia đình",
    score: 4,
    max: 4,
    min: 1,
    averageTime: 0.25,
    unit: "nhiệm vụ",
  },
  {
    month: 3,
    tag: "Gia đình",
    label: "Dọn nhà 1/6",
    score: 2,
    max: 5,
    min: 3,
    averageTime: 2,
    unit: "nhiệm vụ",
  },
];
kpiData.forEach((item) => {
  item.percent = ((item.score - item.min) / (item.max - item.min)) * 100;
  item.remainingTime =
    item.score < item.max
      ? (item.averageTime * (item.max - item.score)).toFixed(2)
      : null;
});

// console.log(kpiData);
export default kpiData;
