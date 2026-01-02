import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PublicHabitCard from "../../components/PublicHabitCard/PublicHabitCard";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PublicHabit = () => {
  const { data } = useLoaderData();

  const [habits, setHabits] = useState(data);
  const [allCategory, setAllCategory] = useState([]);
  const [allDates, setAllDates] = useState([]);

  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("All");

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const perItem = 4;

  useEffect(() => {
    setAllCategory([...new Set(data.map((item) => item.category))]);
    setAllDates([
      ...new Set(data.map((item) => item.createdAt || item.createAt)),
    ]);
  }, [data]);

  const applyFilters = (baseData, cat, search, date) => {
    let filtered = [...baseData];

    if (cat !== "All") {
      filtered = filtered.filter((item) => item.category === cat);
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (date !== "All") {
      filtered = filtered.filter(
        (item) => item.createdAt === date || item.createAt === date
      );
    }

    return filtered;
  };

  const handleCategoryChange = async (e) => {
    const value = e.target.value;
    setCategory(value);
    setPage(1);
    setLoading(true);

    try {
      let base =
        value === "All"
          ? data
          : (
              await axios.get(
                `https://habit-server-psi.vercel.app/habit-category?category=${value}`
              )
            ).data;

      const result = applyFilters(base, value, searchTerm, selectedDate);
      setHabits(result);
    } catch {
      setHabits([]);
    }

    setLoading(false);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearchTerm(value);
    setPage(1);
    setLoading(true);

    try {
      const base = (
        await axios.get(
          `https://habit-server-psi.vercel.app/habit-search?search=${value}`
        )
      ).data;

      const result = applyFilters(base, category, value, selectedDate);
      setHabits(result);
    } catch {
      setHabits([]);
    }

    setLoading(false);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setSelectedDate(value);
    setPage(1);

    const result = applyFilters(data, category, searchTerm, value);
    setHabits(result);
  };

  const totalPage = Math.ceil(habits.length / perItem);
  const start = (page - 1) * perItem;
  const paginatedHabits = habits.slice(start, start + perItem);

  return (
    <div>
      <h2 className="text-4xl text-center my-7 font-bold text-gray-500">
        All Public Habits
      </h2>

      <div className="flex justify-between max-w-[90%] mx-auto md:flex-row flex-col mb-9">
        <form onSubmit={handleSearchSubmit} className="flex gap-3">
          <input name="search" className="input" placeholder="Search..." />
          <button className="btn bg-cyan-500 text-white">Search</button>
        </form>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="select"
        >
          <option value="All">All Categories</option>
          {allCategory.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>

        <select
          value={selectedDate}
          onChange={handleDateChange}
          className="select"
        >
          <option value="All">All Dates</option>
          {allDates.map((d, i) => (
            <option key={i}>{d}</option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 max-w-[90%] mx-auto">
        {loading ? (
          [...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse h-64 bg-gray-200 rounded-xl"
            />
          ))
        ) : paginatedHabits.length ? (
          paginatedHabits.map((item) => (
            <PublicHabitCard key={item._id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-500">
            No habits found
          </p>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination
            count={totalPage}
            page={page}
            onChange={(e, v) => setPage(v)}
          />
        </Stack>
      </div>
    </div>
  );
};

export default PublicHabit;
