
export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const isToday = (date) => {
  const today = new Date();
  const compare = new Date(date);

  return (
    today.getFullYear() === compare.getFullYear() &&
    today.getMonth() === compare.getMonth() &&
    today.getDate() === compare.getDate()
  );
};

export const getWeekDates = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const week = [];

  for (let i = 0; i < 7; i++) {
    const firstDay = new Date(today);
    firstDay.setDate(today.getDate() - dayOfWeek + i);
    week.push(formatDate(firstDay));
  }

  return week;
};

export const getMonthDates = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const days = new Date(year, month + 1, 0).getDate();
  const dates = [];

  for (let i = 1; i <= days; i++) {
    dates.push(formatDate(new Date(year, month, i)));
  }

  return dates;
};