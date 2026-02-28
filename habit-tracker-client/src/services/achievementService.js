import API from "./api";

export const getAchievementsAPI = async () => {
  const { data } = await API.get("/achievements");
  return data;
};