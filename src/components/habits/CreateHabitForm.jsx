import { useState } from "react";
import { useHabits } from "../../context/HabitContext";

const CreateHabitForm = () => {
  const { createHabit } = useHabits();

  const [form, setForm] = useState({
    title: "",
    description: "",
    difficulty: "easy",
    target_value: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createHabit(form);
    setForm({
      title: "",
      description: "",
      difficulty: "easy",
      target_value: 1
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Create Habit
      </h2>

      <input
        type="text"
        placeholder="Habit title"
        className="w-full mb-3 p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        required
      />

      <textarea
        placeholder="Description"
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
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Add Habit
      </button>
    </form>
  );
};

export default CreateHabitForm;