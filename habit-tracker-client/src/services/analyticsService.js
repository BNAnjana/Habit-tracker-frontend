import API from "./api";

export const getAnalyticsAPI = async () => {
  const { data } = await API.get("/analytics");
  return data;
};