import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PublicHabitCard from "../../components/PublicHabitCard/PublicHabitCard";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const PublicHabit = () => {
  const { data } = useLoaderData();
  const [habits, setHabits] = useState(data);
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    setAllCategory(uniqueCategories);
  }, [data]);
  // console.log(allCategory);

  const handleChange = async (e) => {
    const selectCategory = e.target.value;

    if (selectCategory === "All") {
      return setHabits(data);
    }

    try {
      const result = await axios(
        `http://localhost:3000/habit-category?category=${selectCategory}`
      );
      const response = result.data;
      setHabits(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    try {
      const result = await axios(
        `http://localhost:3000/habit-search?search=${search}`
      );
      const response = result.data;
      setHabits(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h2 className="text-4xl text-center my-7">All public habits</h2>
      <div className="flex justify-between max-w-[90%] mx-auto md:flex-row flex-col">
        <div className="flex-1">
          <form
            onSubmit={handleInputSubmit}
            className="flex justify-center  items-center gap-3 lg:justify-start mb-9 "
          >
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input name="search" type="search" placeholder="Search" />
            </label>
            <button
              type="submit"
              className="btn rounded-lg bg-cyan-300 text-lg text-white"
            >
              Search
            </button>
          </form>
        </div>
        <div className="mb-9 flex justify-center ">
          <select
            // defaultValue="Pick a color"
            onChange={handleChange}
            className="select appearance-none z-20"
          >
            <option value="All">All habit</option>
            {allCategory?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid lg:grid-cols-3 gap-5 justify-center items-center md:grid-cols-2">
        {habits?.map((item) => (
          <PublicHabitCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PublicHabit;
