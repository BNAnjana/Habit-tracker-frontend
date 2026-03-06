import { useHabits } from "../../context/HabitContext";
import StreakBadge from "./StreakBadge";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import UpdateHabitModal from "./UpdateHabitModal";
import { completeHabitAPI } from "../../services/habitService";

const HabitCard = ({ habit, refreshHabits }) => {
  const { logHabit, deleteHabit } = useHabits();
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleLog = async () => {
    await logHabit(habit.id);
  };

  const handleComplete = async () => {
    try {
      await completeHabitAPI(habit.id);
      setCompleted(true);   // UI update
      refreshHabits(); // reload habits
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {habit.title}
          </h3>

          <div className="flex gap-2">
            <button className="dark:text-gray-100" onClick={() => setOpen(true)}>
              <Pencil size={18} />
            </button>
            <button onClick={() => deleteHabit(habit.id)}>
              <Trash size={18} className="text-red-500" />
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-100 mt-2">
          {habit.description}
        </p>

        <div className="mt-4">
          <StreakBadge streak={habit.current_streak || 0} />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-100 mt-2">
          {habit.difficulty}
        </p>

        {completed ? (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Completed ✅
          </div>
        ) : (
          <button
            onClick={handleComplete}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Mark as Completed
          </button>
        )}
        
      </div>

      {open && (
        <UpdateHabitModal habit={habit} setOpen={setOpen} />
      )}
    </>
  );
};

export default HabitCard;