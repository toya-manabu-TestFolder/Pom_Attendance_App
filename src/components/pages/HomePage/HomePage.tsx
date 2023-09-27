import HomePageTmp from "../../Templates/HomePageTmp/HomePageTmp";

const HomePage = () => {
  const attendanceData = {
    payds: [
      {
        title: "残日数",
        value: String(12.0) + "日",
      },
      { title: "付与日数", value: String(14.0) + "日" },
      { title: "取得日数", value: String(2.0) + "日" },
      { title: "取得時間", value: String(0.0) + "時間" },
    ],
    RegistedWorkTimes: {
      startTime: "09:00",
      endTime: "18:00",
    },
    loginUser: "たぬき たぬき",
  };
  return <HomePageTmp attendanceData={attendanceData} />;
};

export default HomePage;
