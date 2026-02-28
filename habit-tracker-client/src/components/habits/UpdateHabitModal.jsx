import { useState } from "react";
import { useHabits } from "../../context/HabitContext";

const UpdateHabitModal = ({ habit, setOpen }) => {
  const { updateHabit } = useHabits();

  const [form, setForm] = useState({
    title: habit.title,
    description: habit.description,
    difficulty: habit.difficulty
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateHabit(habit.id, form);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-96">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Update Habit
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <select
            className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            value={form.difficulty}
            onChange={(e) =>
              setForm({ ...form, difficulty: e.target.value })
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHabitModal;