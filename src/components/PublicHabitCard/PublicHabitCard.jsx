import React from "react";
import { Link } from "react-router";
import { TbClockHour2Filled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { motion } from "motion/react";

const PublicHabitCard = ({ item }) => {
  const {
    _id,
    title,
    description,
    category,
    image,
    reminderTime,
    userName,
    createAt,
  } = item;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        transition={{ duration: 0.5 }}
        className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border mt-3"
      >
        <img
          src={
            image ||
            "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fadbcd993-4a55-45f4-9940-8ec038880085%2F1725343645903%2Fdesktop.jpg&w=3840&q=75"
          }
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="p-5 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500">{createAt}</span>
          </div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex justify-between items-center pt-3">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <TbClockHour2Filled size={20} /> Reminder:{" "}
              <span className="font-medium">{reminderTime}</span>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <FaUser size={20} />
              <span>{userName}</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to={`/details-page/${_id}`}
              className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition shadow-md cursor-pointer block text-center"
            >
              See Details
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PublicHabitCard;
