import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "hover:bg-gray-200 dark:hover:bg-gray-800"
    }`;

  return (
    <div
      className={`
        fixed md:sticky md:top-0
        z-40
        top-0 left-0
        h-screen
        w-64
        bg-white dark:bg-gray-900
        shadow-lg
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="font-bold dark:text-gray-100">Menu</h2>
        <button
          className="dark:text-gray-100"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-6 dark:text-gray-100">
        <Link className={linkClass("/dashboard")} to="/dashboard">
          Dashboard
        </Link>
        <Link className={linkClass("/habits")} to="/habits">
          Habits
        </Link>
        <Link className={linkClass("/achievements")} to="/achievements">
          Achievements
        </Link>
        <Link className={linkClass("/reports")} to="/reports">
          Reports
        </Link>
        <Link className={linkClass("/challenges")} to="/challenges">
          Challenges
        </Link>
        <Link className={linkClass("/profile")} to="/profile">
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;