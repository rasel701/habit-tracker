import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

const PopularHabit = () => {
  const [habits, setHabits] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios(
        "https://habit-server-psi.vercel.app/popular-habit"
      );
      const data = res.data;
      console.log(data);
      setHabits(data);
    };

    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 130 },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "number",
      width: 90,
    },
    {
      field: "userName",
      headerName: "User Name",
      width: 160,
    },
  ];

  const rows = habits?.map((habit, index) => ({
    id: index + 1,
    title: habit.title,
    category: habit.category,
    createdAt: habit.createdAt || habit.createAt,
    userName: habit.userName,
  }));

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="my-25">
      <h2 className="text-center text-3xl font-bold  text-gray-500 mb-7">
        Popular Habit
      </h2>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default PopularHabit;
