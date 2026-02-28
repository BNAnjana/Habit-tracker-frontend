import Layout from "../components/layout/Layout";
import { useHabits } from "../context/HabitContext";
import HabitCard from "../components/habits/HabitCard";

const Dashboard = () => {
  const { habits } = useHabits();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">
        Dashboard
      </h1>

      {habits.length === 0 ? (
        <p className="text-muted-foreground">
          No habits yet. Start building one!
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;