import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { getAchievementsAPI } from "../services/achievementService";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await getAchievementsAPI();
        setAchievements(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <Layout>
    <div className="p-6 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>

      {achievements.length === 0 ? (
        <p>No achievements yet.</p>
      ) : (
        achievements.map((a) => (
          <div
            key={a.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4"
          >
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-500">{a.description}</p>
          </div>
        ))
      )}
    </div>
    </Layout>
  );
};

export default Achievements;