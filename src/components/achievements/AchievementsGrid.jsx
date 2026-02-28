import AchievementBadge from "./AchievementBadge";

const AchievementsGrid = ({ achievements }) => {
  if (achievements.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No achievements unlocked yet 🚀
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => (
        <AchievementBadge
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  );
};

export default AchievementsGrid;