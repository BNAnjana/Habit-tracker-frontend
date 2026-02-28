import API from "./api";

export const getChallengesAPI = async () => {
  const { data } = await API.get("/challenges");
  return data;
};

export const joinChallengeAPI = async (id) => {
  const { data } = await API.post(`/challenges/${id}/join`);
  return data;
};