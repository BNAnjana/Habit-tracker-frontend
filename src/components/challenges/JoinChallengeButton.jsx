import { joinChallengeAPI } from "../../services/challengeService";
import { useState } from "react";

const JoinChallengeButton = ({ challengeId }) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = async () => {
    try {
      await joinChallengeAPI(challengeId);
      setJoined(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleJoin}
      disabled={joined}
      className={`mt-4 w-full py-2 rounded-lg text-white ${
        joined ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      {joined ? "Joined ✅" : "Join Challenge"}
    </button>
  );
};

export default JoinChallengeButton;