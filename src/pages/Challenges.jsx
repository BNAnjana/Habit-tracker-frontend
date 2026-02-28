import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ChallengeCard from "../components/challenges/ChallengeCard";
import { getChallengesAPI } from "../services/challengeService";

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const data = await getChallengesAPI();
      setChallenges(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Community Challenges
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:text-gray-100">
        { challenges.length === 0 ? (
          <p className="font-semibold">No Challenges yet.</p>
        ) : (
        challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        )))}
        
      </div>
    </Layout>
  );
};

export default Challenges;