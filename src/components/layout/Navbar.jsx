import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Menu } from "lucide-react";

const Navbar = ({ setOpen }) => {
  const { user, logout } = useAuth();
  const { toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow">
      
      {/* Mobile Hamburger */}
      <button
        className="md:hidden dark:text-gray-100"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      <h1 className="text-xl font-bold text-indigo-600">
        Habit Tracker
      </h1>

      <div className="flex items-center gap-4">
        <p className="hidden sm:block font-medium dark:text-gray-100">
          Welcome, {user?.name} 👋
        </p>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          🌙
        </button>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;