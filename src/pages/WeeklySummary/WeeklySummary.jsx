import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const WeeklySummary = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://habit-server-psi.vercel.app/weekly-summary"
      );
      setWeeklyData(res.data.weeklyData);
      setDays(res.data.last7Days.reverse());
      setLoading(false);
    };
    getData();
  }, []);

  const series = weeklyData.map((habit) => ({
    name: habit.title,
    data: days.map((day) => (habit.completedThisWeek.includes(day) ? 1 : 0)),
  }));

  const options = {
    chart: { type: "bar", stacked: true },
    xaxis: { categories: days },
    yaxis: { title: { text: "Completed" }, max: 1 },
    plotOptions: { bar: { horizontal: false } },
    legend: { position: "bottom" },
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 130 },
    {
      field: "completed",
      headerName: "Completed This Week",
      width: 190,
    },
    {
      field: "streak",
      headerName: "Streak",
      width: 160,
    },
  ];

  const rows = weeklyData?.map((habit, index) => ({
    id: index + 1,
    title: habit.title,
    category: habit.category,
    completed: habit.completedThisWeek.join(", ") || "None",
    streak: habit.streak,
  }));

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Weekly Habit Summary</h2>

      <Paper
        sx={{
          p: 3,
          minHeight: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <p className="text-gray-400">Loading weekly summary...</p>
        ) : weeklyData.length > 0 ? (
          <Chart options={options} series={series} type="bar" height={350} />
        ) : (
          <p>No data available</p>
        )}
      </Paper>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Habit Table</h3>
        <Paper sx={{ height: 400, width: "100%" }}>
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              Loading table...
            </div>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          )}
        </Paper>
      </div>
    </div>
  );
};

export default WeeklySummary;
