import React from "react";
import { useLoaderData } from "react-router";
import PublicHabitCard from "../../components/PublicHabitCard/PublicHabitCard";

const PublicHabit = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-4xl text-center my-7">All public habits</h2>
      <div className="max-w-[90%] mx-auto grid lg:grid-cols-3 gap-5 justify-center items-center md:grid-cols-2">
        {data?.map((item) => (
          <PublicHabitCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PublicHabit;
