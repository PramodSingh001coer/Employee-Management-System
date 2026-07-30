import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalDepartments: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await API.get("/dashboard/stats");

      if (data.success) {
        setStats(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Employees"
          value={stats.totalEmployees}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Departments"
          value={stats.totalDepartments}
          color="bg-green-600"
        />

        <DashboardCard
          title="Active"
          value={stats.activeEmployees}
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Inactive"
          value={stats.inactiveEmployees}
          color="bg-red-600"
        />

      </div>
    </div>
  );
};

export default Dashboard;