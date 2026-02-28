import Layout from "../components/layout/Layout";
import CreateHabitForm from "../components/habits/CreateHabitForm";
import HabitCard from "../components/habits/HabitCard";
import { useHabits } from "../context/HabitContext";

const Habits = () => {
  const { habits } = useHabits();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">
        Manage Habits
      </h1>

      <CreateHabitForm />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </Layout>
  );
};

export default Habits;