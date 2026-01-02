// import React from "react";
// import { Link } from "react-router";
// import { TbClockHour2Filled } from "react-icons/tb";
// import { FaUser } from "react-icons/fa";
// import { motion } from "motion/react";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

// const PublicHabitCard = ({ item }) => {
//   const {
//     _id,
//     title,
//     description,
//     category,
//     image,
//     reminderTime,
//     userName,
//     createAt,
//   } = item;

//   return (
//     <>
//       <motion.div
//         whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//         transition={{ duration: 0.5 }}
//         className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border mt-3"
//       >
//         <img
//           src={
//             image ||
//             "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fadbcd993-4a55-45f4-9940-8ec038880085%2F1725343645903%2Fdesktop.jpg&w=3840&q=75"
//           }
//           alt={title}
//           className="h-48 w-full object-cover"
//         />
//         <div className="p-5 space-y-2">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
//               {category}
//             </span>
//             <span className="text-xs text-gray-500">{createAt}</span>
//           </div>

//           <h2 className="text-lg font-bold text-gray-800">{title}</h2>
//           <p className="text-gray-600 text-sm">{description}</p>

//           <div className="flex justify-between items-center pt-3">
//             <div className="text-sm text-gray-500 flex items-center gap-2">
//               <TbClockHour2Filled size={20} /> Reminder:{" "}
//               <span className="font-medium">{reminderTime}</span>
//             </div>
//             <div className="text-sm text-gray-500 flex items-center gap-2">
//               <FaUser size={20} />
//               <span>{userName}</span>
//             </div>
//           </div>

//           <div className="pt-4">
//             <Link
//               id={`details-${_id}`}
//               to={`/details-page/${_id}`}
//               className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition shadow-md cursor-pointer block text-center"
//             >
//               See Details
//             </Link>

//             <Tooltip
//               anchorSelect={`#details-${_id}`}
//               place="top"
//               className="!bg-purple-600 !text-white !rounded-lg !px-3 !py-1 !text-sm shadow-md"
//             >
//               Click to see full habit info
//             </Tooltip>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default PublicHabitCard;

import React from "react";
import { Link } from "react-router";
import { TbClockHour2Filled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={
            image ||
            "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fadbcd993-4a55-45f4-9940-8ec038880085%2F1725343645903%2Fdesktop.jpg&w=3840&q=75"
          }
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm flex-1 line-clamp-3">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <TbClockHour2Filled size={16} />
            <span>Reminder: {reminderTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser size={16} />
            <span>{userName}</span>
          </div>
        </div>
        <div className="mt-2 text-gray-400 text-xs">{createAt}</div>

        {/* CTA Button */}
        <div className="mt-4">
          <Link
            id={`details-${_id}`}
            to={`/details-page/${_id}`}
            className="block w-full text-center bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 shadow-md transition"
          >
            View Details
          </Link>
          <Tooltip
            anchorSelect={`#details-${_id}`}
            place="top"
            className="!bg-purple-600 !text-white !rounded-lg !px-3 !py-1 !text-sm shadow-md"
          >
            Click to see full habit info
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicHabitCard;
