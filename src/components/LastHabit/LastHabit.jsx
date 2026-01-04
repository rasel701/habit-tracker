import React from "react";
import PublicHabitCard from "../PublicHabitCard/PublicHabitCard";

const LastHabit = ({ habits }) => {
  return (
    <div>
      <h2 className="text-4xl text-center my-16 font-bold text-gray-500">
        Recently Created
      </h2>
      <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {habits?.map((item) => (
          <PublicHabitCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LastHabit;
