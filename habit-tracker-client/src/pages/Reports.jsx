import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import WeeklyChart from "../components/reports/WeeklyChart";
import MonthlyChart from "../components/reports/MonthlyChart";
import AnalyticsCards from "../components/reports/AnalyticsCards";
import { getAnalyticsAPI } from "../services/analyticsService";

const Reports = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalyticsAPI();
        setStats(data);
      } catch (error) {
        console.error("Analytics error:", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">
        Reports & Analytics
      </h1>

      <AnalyticsCards />

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <WeeklyChart />
        <MonthlyChart />
      </div>
    </Layout>
  );
};

export default Reports;