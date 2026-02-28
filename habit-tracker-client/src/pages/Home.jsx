import { Link } from "react-router-dom";
import TypingHero from "../components/common/TypingHero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-700 to-blue-700 flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Habit Tracker App
      </h1>

      <TypingHero />

      <p className="mt-6 text-lg text-center max-w-2xl text-white">
        Build powerful habits. Track streaks. Unlock achievements.
        Transform your life one day at a time.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/register"
          className="px-6 py-3 border border-indigo-900 bg-gray-100 text-indigo-700 font-semibold text-lg rounded-lg hover:opacity-90"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 border border-indigo-900 bg-gray-100 text-indigo-700 font-semibold text-lg rounded-lg hover:opacity-90"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;