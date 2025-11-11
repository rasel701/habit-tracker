import React from "react";
import PublicHabitCard from "../PublicHabitCard/PublicHabitCard";

const LastHabit = ({ habits }) => {
  return (
    <div>
      <h2 className="text-4xl text-center my-16 font-bold text-gray-500">
        recently created
      </h2>
      <div className="max-w-[90%] mx-auto grid lg:grid-cols-3 gap-5 justify-center items-center md:grid-cols-2">
        {habits?.map((item) => (
          <PublicHabitCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LastHabit;
