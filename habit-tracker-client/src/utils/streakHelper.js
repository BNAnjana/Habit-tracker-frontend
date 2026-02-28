
import { formatDate } from "./dateHelper";

export const calculateStreak = (logs) => {
  if (!logs || logs.length === 0) return 0;

  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.completed_date) - new Date(a.completed_date)
  );

  let streak = 0;
  let currentDate = new Date();

  for (let log of sortedLogs) {
    const logDate = new Date(log.completed_date);

    const diff =
      (currentDate - logDate) / (1000 * 60 * 60 * 24);

    if (Math.floor(diff) === 0 || Math.floor(diff) === 1) {
      streak++;
      currentDate = logDate;
    } else {
      break;
    }
  }

  return streak;
};

export const calculateLongestStreak = (logs) => {
  if (!logs || logs.length === 0) return 0;

  const sortedLogs = [...logs].sort(
    (a, b) => new Date(a.completed_date) - new Date(b.completed_date)
  );

  let longest = 0;
  let current = 1;

  for (let i = 1; i < sortedLogs.length; i++) {
    const prev = new Date(sortedLogs[i - 1].completed_date);
    const curr = new Date(sortedLogs[i].completed_date);

    const diff =
      (curr - prev) / (1000 * 60 * 60 * 24);

    if (Math.floor(diff) === 1) {
      current++;
    } else {
      longest = Math.max(longest, current);
      current = 1;
    }
  }

  return Math.max(longest, current);
};