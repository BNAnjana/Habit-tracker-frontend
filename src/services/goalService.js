import API from "./api";

export const getGoals = () =>
  API.get("/goals");

export const createGoal = (data) =>
  API.post("/goals", data);

export const updateGoalProgress = (id, data) =>
  API.put(`/goals/${id}`, data);

export const deleteGoal = (id) =>
  API.delete(`/goals/${id}`);