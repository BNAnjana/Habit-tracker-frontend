const AchievementBadge = ({ achievement }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:scale-105 transition text-center">
      
      <div className="text-4xl mb-3">🏆</div>

      <h3 className="font-semibold text-gray-900 dark:text-white">
        {achievement.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {achievement.description}
      </p>

      <p className="text-xs text-indigo-500 mt-3">
        Unlocked on {new Date(achievement.unlocked_at).toDateString()}
      </p>
    </div>
  );
};

export default AchievementBadge;