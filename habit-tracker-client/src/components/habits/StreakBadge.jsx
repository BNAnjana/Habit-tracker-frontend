const StreakBadge = ({ streak = 0 }) => {
  return (
    <div className="inline-flex items-center gap-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
      🔥 {streak} day streak
    </div>
  );
};

export default StreakBadge;