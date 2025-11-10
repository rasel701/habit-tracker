import React, { useContext } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddHabit = () => {
  const { user } = useContext(UserAuthContext);
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleAddHabit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const habitImage = e.target.habitImage.value;
    console.log({ title, description, category, habitImage });
    const newHabit = {
      title,
      description,
      category,
      image: habitImage || null,
      reminderTime: time,
      userName: user.displayName,
      userEmail: user.email,
      completionHistory: [],
      createAt: new Date().toLocaleDateString(),
    };
    console.log(newHabit);
    try {
      const result = await axios.post(
        "http://localhost:3000/habit-info",
        newHabit
      );
      const response = result.data;
      if (response.insertedId) {
        toast.success("Habit saved successfully. Keep building discipline!");
        e.target.reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 mt-12 border border-purple-100">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Add New Habit
        </h2>

        <form onSubmit={handleAddHabit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Habit Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter habit title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="3"
              name="description"
              required
              placeholder="Write a short description..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            >
              <option value="">Select a category</option>
              <option value="Morning">Morning</option>
              <option value="Night">Night</option>
              <option value="Work">Work</option>
              <option value="Fitness">Fitness</option>
              <option value="Evening">Evening</option>
              <option value="Study">Study</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image (optional)
            </label>
            <input
              type="text"
              name="habitImage"
              placeholder="Paste ImgBB image URL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition shadow-md cursor-pointer"
            >
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
