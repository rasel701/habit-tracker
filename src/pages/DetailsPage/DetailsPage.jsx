import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import { UserAuthContext } from "../../contexts/AuthContext";

const DetailsPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserAuthContext);
  const [habit, setHabit] = useState({});
  console.log(id);
  // const [habit, setHabit] = useState({
  //   _id: "691187f56481964ae07696ca",
  //   title: "Read Books",
  //   description: "Read 20 pages of a book daily before bed",
  //   category: "Evening",
  //   reminderTime: "09:00 PM",
  //   image: "https://i.ibb.co/N9dc9k5/read-book.jpg",
  //   userName: "Sadia",
  //   userEmail: "sadia@gmail.com",
  //   completionHistory: ["2025-11-02", "2025-11-03", "2025-11-04"],
  //   createdAt: "2025-10-28",
  // });

  useEffect(() => {
    const detailsFun = async () => {
      const result = await axios(`http://localhost:3000/habit-info/${id}`);
      const response = result.data;
      setHabit(response);
    };
    detailsFun();
  }, [id]);

  const handleMarkComplete = async () => {
    try {
      const res = await axios(
        `http://localhost:3000/mark-complete/${id}?userEmail=${user.email}`
      );
      toast.success(res.data.message);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const last30Days = [...Array(30)].map((_, i) => {
    const d = new Date().toLocaleDateString();
    d.setDate(d.getDate() - i);
    return d;
  });
  console.log(last30Days);

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-10">
        <img
          src={habit.image}
          alt={habit.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
              {habit.category}
            </span>
            <span className="text-gray-500 text-sm">
              🕒 {habit.reminderTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">{habit.title}</h2>
          <p className="text-gray-600">{habit.description}</p>

          {/* Progress Bar */}
          <div>
            <p className="text-sm text-gray-700 mb-1 font-medium">
              Progress (last 30 days)
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all"
                style={{ width: `${10}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {Math.round(10)}% complete
            </p>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
              🔥 {5}-day streak
            </span>
          </div>

          {/* Creator Info */}
          <div className="text-sm text-gray-600 border-t pt-3">
            <p>
              <strong>Created by:</strong> {habit.userName}
            </p>
            <p>{habit.userEmail}</p>
            <p className="text-xs text-gray-400">
              Created at: {habit.createdAt}
            </p>
          </div>

          {/* Mark Complete Button */}
          <button
            onClick={handleMarkComplete}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition cursor-pointer"
          >
            ✅ Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
