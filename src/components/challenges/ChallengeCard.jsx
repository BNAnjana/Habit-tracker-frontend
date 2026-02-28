import JoinChallengeButton from "./JoinChallengeButton";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {challenge.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 mt-2">
        {challenge.description}
      </p>

      <div className="mt-3 text-sm text-indigo-600 font-medium">
        ⏳ Duration: {challenge.duration_days} days
      </div>

      <div className="mt-2 text-sm text-gray-500">
        📅 Starts: {new Date(challenge.start_date).toDateString()}
      </div>

      <JoinChallengeButton challengeId={challenge.id} />
    </div>
  );
};

export default ChallengeCard;