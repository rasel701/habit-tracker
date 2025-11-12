import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import { UserAuthContext } from "../../contexts/AuthContext";

const DetailsPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserAuthContext);
  const [habit, setHabit] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const detailsFun = async () => {
      const result = await axios(
        `https://habit-server-psi.vercel.app/habit-info/${id}`
      );
      const response = result.data;
      setHabit(response);
    };
    detailsFun();
  }, [id, refresh]);

  const handleMarkComplete = async () => {
    try {
      const res = await axios(
        `https://habit-server-psi.vercel.app/mark-complete/${id}?userEmail=${user.email}`
      );
      toast.success(res.data.message);
      setRefresh(!refresh);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const last30Days = [...Array(30)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
  });
  const completedDays = habit?.completionHistory?.filter((date) =>
    last30Days.includes(date)
  );
  const progress = (completedDays?.length / 30) * 100;

  console.log(completedDays);

  const today = new Date();
  const todayStr =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  let streak = 0;
  let currentDate = today;

  while (true) {
    const dateStr =
      currentDate.getMonth() +
      1 +
      "/" +
      currentDate.getDate() +
      "/" +
      currentDate.getFullYear();

    if (habit?.completionHistory?.includes(dateStr)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-10">
        <img
          src={
            habit?.image ||
            "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fadbcd993-4a55-45f4-9940-8ec038880085%2F1725343645903%2Fdesktop.jpg&w=3840&q=75"
          }
          alt={habit?.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
              {habit.category}
            </span>
            <span className="text-gray-500 text-sm">
              🕒 {habit?.reminderTime}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">{habit?.title}</h2>
          <p className="text-gray-600">{habit?.description}</p>

          <div>
            <p className="text-sm text-gray-700 mb-1 font-medium">
              Progress (last 30 days)
            </p>

            <progress
              className="progress progress-secondary w-80 h-10"
              value={progress}
              max="30"
            ></progress>

            <p className="text-sm text-gray-500 mt-1">
              {Math.round(progress)}% complete
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
              🔥 {streak}-day streak
            </span>
          </div>

          <div className="text-sm text-gray-600 border-t pt-3">
            <p>
              <strong>Created by:</strong> {habit?.userName}
            </p>
            <p>{habit?.userEmail}</p>
            <p className="text-xs text-gray-400">
              Created at: {habit?.createdAt}
            </p>
          </div>

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
