import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const MyHabit = () => {
  const { user } = useContext(UserAuthContext);
  const [habits, setHabits] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const [loading,setLoading] =useState(false)

  useEffect(() => {
    const myHabitFun = async () => {
      try {
        const result = await axios(
          `https://habit-server-psi.vercel.app/my-habit?email=${user.email}`
        );
        setHabits(result.data);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    };
    myHabitFun();
  }, [user.email, refresh]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await axios.delete(
            `https://habit-server-psi.vercel.app/habit-info/${id}?email=${user.email}`,
            { headers: { authorization: `Bearer ${user.accessToken}` } }
          );
          const response = result.data;
          // console.log(response);
          Swal.fire({
            title: "Deleted!",
            text: "Your habit has been deleted.",
            icon: "success",
          });

          setHabits((prev) => prev.filter((habit) => habit._id !== id));
        } catch (error) {
          console.error(error?.response?.data.message);
          Swal.fire({
            title: "Error!",
            text: error?.response?.data.message || "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleMarkComplete = async (id, email) => {
    // console.log({ id, email });
    try {
      const res = await axios(
        `https://habit-server-psi.vercel.app/mark-complete/${id}?userEmail=${email}`
      );
      toast.success(res.data.message);
      setRefresh(!refresh);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const calculateStreak = (completionHistory) => {
    console.log(completionHistory);
    if (!completionHistory || completionHistory.length === 0) return 0;

    const sortedHistory = completionHistory
      .map((d) => new Date(d))
      .sort((a, b) => b - a);

    let streak = 0;
    let currentDate = new Date();

    while (true) {
      const dateStr =
        currentDate.getMonth() +
        1 +
        "/" +
        currentDate.getDate() +
        "/" +
        currentDate.getFullYear();

      const formattedHistory = sortedHistory.map(
        (d) => d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear()
      );

      if (formattedHistory.includes(dateStr)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  return (
    <>
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-500">
          My Habits
        </h1>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Current Streak
                </th>
                <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Created Date
                </th>
                <th className="px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {habits && habits.length > 0 ? (
                habits.map((habit, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                      {habit?.title}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-500">
                      <span className="inline-block px-2 py-1 text-xs md:text-sm bg-blue-100 text-blue-800 rounded-full">
                        {habit?.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-500">
                      <span
                        className={`inline-block px-2 py-1 text-xs md:text-sm rounded-full ${
                          habit?.completionHistory.length > 0
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {calculateStreak(habit?.completionHistory)} days
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-500">
                      {habit?.createAt}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-center flex flex-col md:flex-row justify-center gap-2">
                      <Link
                        to={`/update/${habit._id}`}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition cursor-pointer"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(habit._id)}
                        className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition cursor-pointer"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          handleMarkComplete(habit._id, habit.userEmail)
                        }
                        className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition cursor-pointer"
                      >
                        Mark Complete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-6 text-center text-gray-500 text-sm md:text-base"
                  >
                    No habits found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyHabit;
