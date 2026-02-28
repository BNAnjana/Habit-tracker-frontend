import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const MonthlyChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Monthly Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;