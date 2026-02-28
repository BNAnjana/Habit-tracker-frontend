
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDifficulty = (level) => {
  switch (level) {
    case "easy":
      return "🟢 Easy";
    case "medium":
      return "🟡 Medium";
    case "hard":
      return "🔴 Hard";
    default:
      return "Unknown";
  }
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};