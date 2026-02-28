import API from "./api";

export const getWeeklyReportAPI = async () => {
  const { data } = await API.get("/reports/weekly");
  return data;
};

export const getMonthlyReportAPI = async () => {
  const { data } = await API.get("/reports/monthly");
  return data;
};

