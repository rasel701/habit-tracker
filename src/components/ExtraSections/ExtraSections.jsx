import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaBrain, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router";

const ExtraSections = () => {
  return (
    <div className="max-w-[90%] mx-auto my-20 space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="bg-gray-50 p-10 rounded-2xl shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-5">
          Why Build Positive Habits?
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto mb-10">
          Building small, consistent habits creates long-term success and
          personal growth. Every big achievement starts with small, daily steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <FaBrain className="text-4xl text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">Better Focus</h3>
            <p className="text-gray-500 text-sm text-center">
              Regular habits help you stay disciplined and focused on what
              matters most.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <FaChartLine className="text-4xl text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">
              Continuous Growth
            </h3>
            <p className="text-gray-500 text-sm text-center">
              Good habits turn small daily actions into massive long-term
              progress.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <FaUsers className="text-4xl text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">
              Stronger Mindset
            </h3>
            <p className="text-gray-500 text-sm text-center">
              Habits train your brain to overcome laziness and stay consistent.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <FaHandsHelping className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">Less Stress</h3>
            <p className="text-gray-500 text-sm text-center">
              Routine habits bring balance, peace, and mental clarity to your
              day.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="bg-gray-50 p-10 rounded-2xl shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-5">
          Join Our Habit-Building Community
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto mb-10">
          Connect with thousands of motivated people who are building good
          habits every day. Share your progress, get inspired, and stay
          accountable together.
        </p>

        <Link to={"/public-habit"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-md "
          >
            Join Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ExtraSections;
