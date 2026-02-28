const AnalyticsCards = ({ stats }) => {
  if (!stats) {
    return (
      <div className="text-gray-500 dark:text-gray-400">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Total Habits
        </h3>
        <p className="text-3xl font-bold text-indigo-600">
          {stats.totalHabits || 0}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Completion Rate
        </h3>
        <p className="text-3xl font-bold text-green-600">
          {stats.completionRate || 0}%
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Longest Streak
        </h3>
        <p className="text-3xl font-bold text-orange-500">
          🔥 {stats.bestStreak || 0}
        </p>
      </div>

    </div>
  );
};

export default AnalyticsCards;