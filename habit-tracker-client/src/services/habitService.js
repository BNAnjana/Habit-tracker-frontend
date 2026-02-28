import API from "./api";

export const getHabitsAPI = async () => {
  const { data } = await API.get("/habits");
  return data;
};

export const createHabitAPI = async (habit) => {
  const { data } = await API.post("/habits", habit);
  return data;
};

export const logHabitAPI = async (id, value = 1) => {
  const { data } = await API.post(`/habits/${id}/log`, { value });
  return data;
};

export const deleteHabitAPI = async (id) => {
  const { data } = await API.delete(`/habits/${id}`);
  return data;
};

export const updateHabitAPI = async (id, updatedHabit) => {
  const { data } = await API.put(`/habits/${id}`, updatedHabit);
  return data;
};