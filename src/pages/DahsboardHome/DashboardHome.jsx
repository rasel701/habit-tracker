import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import MyCategoryChart from "../../components/MyCategoryChart/MyCategoryChart";
import AllCategoryChart from "../../components/AllCategoryChart/AllCategoryChart";
import PopularHabit from "../../components/PopularHabit/PopularHabit";

const DashboardHome = () => {
  const { user } = useContext(UserAuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios(
        `https://habit-server-psi.vercel.app/my-habit/dashboard?email=${user?.email}`
      );
      setData(res.data);
    };

    fetchDatas();
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 ">Dashboard Overview</h2>

      <header className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-500">
          Welcome, {user?.displayName || "User"}! 👋
        </h2>
        <p className="text-gray-500">
          Here is what's happening with your habits today.
        </p>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
          <p className="text-sm text-gray-500 uppercase font-bold">
            Total Habits
          </p>
          <p className="text-3xl font-black text-gray-800">
            {data?.overview.totalHabits}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Completed</p>
          <p className="text-3xl font-black text-green-600">
            {data?.overview.completedHabits}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Pending</p>
          <p className="text-3xl font-black text-orange-600">
            {data?.overview.pendingHabits}
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center flex-col md:flex-row gap-4 w-full ">
        <MyCategoryChart mychart={data?.categoryStats} />

        <AllCategoryChart />
      </div>
      <PopularHabit />
    </div>
  );
};

export default DashboardHome;

//
