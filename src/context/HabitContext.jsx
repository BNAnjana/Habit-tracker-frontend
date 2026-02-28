import { createContext, useContext, useEffect, useState } from "react";
import {
  getHabitsAPI,
  createHabitAPI,
  logHabitAPI,
  deleteHabitAPI,
  updateHabitAPI,
} from "../services/habitService";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const data = await getHabitsAPI();
    setHabits(data);
  };

  const createHabit = async (habit) => {
    const newHabit = await createHabitAPI(habit);
    setHabits((prev) => [...prev, newHabit]);
  };

  const logHabit = async (id) => {
    await logHabitAPI(id);
    fetchHabits();
  };

  const deleteHabit = async (id) => {
    await deleteHabitAPI(id);
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const updateHabit = async (id, updatedHabit) => {
    const updated = await updateHabitAPI(id, updatedHabit);
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? updated : h))
    );
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <HabitContext.Provider
      value={{
        habits,
        createHabit,
        logHabit,
        deleteHabit,
        updateHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);