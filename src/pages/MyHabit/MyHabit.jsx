import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyHabit = () => {
  const { user } = useContext(UserAuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const myHabitFun = async () => {
      try {
        const result = await axios(
          `http://localhost:3000/my-habit?email=${user.email}`
        );
        setHabits(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    myHabitFun();
  }, [user.email]);

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
            `http://localhost:3000/habit-info/${id}`
          );
          const response = result.data;
          console.log(response);
          Swal.fire({
            title: "Deleted!",
            text: "Your habit has been deleted.",
            icon: "success",
          });

          setHabits((prev) => prev.filter((habit) => habit._id !== id));
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
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
                      {habit?.completionHistory.length} days
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
                    <button className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition cursor-pointer">
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
  );
};

export default MyHabit;
