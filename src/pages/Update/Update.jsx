import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const { data } = useLoaderData();
  // console.log(data);
  const navigate = useNavigate();

  const handleAddHabit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const image = e.target.habitImage.value;
    console.log({ title, description, category, image });

    const newObj = {
      title,
      description,
      category,
      image,
    };

    try {
      const result = await axios.patch(
        `https://habit-server-psi.vercel.app/habit-info/${data._id}`,
        newObj
      );
      const response = result.data;
      console.log(response);
      if (response.modifiedCount === 1) {
        toast.success("Habit update successfully !");
        navigate(-1);
      } else {
        toast.success("“You didn’t change the value.”");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-w-[90%] mx-auto bg-gray-600 rounded-md px-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center animated-button"
        >
          {/* <IoMdArrowRoundBack size={30} /> */}

          <span className="text-lg"> Back</span>
          <span></span>
        </button>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 mt-12 border border-purple-100">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
            Update Habit
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
                defaultValue={data?.title}
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
                defaultValue={data?.description}
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
                defaultValue={data?.category}
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
                defaultValue={data?.image}
                placeholder="Paste ImgBB image URL"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User-Email
              </label>
              <input
                type="email"
                disabled
                defaultValue={data?.userEmail}
                placeholder="Paste ImgBB image URL"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User-Name
              </label>
              <input
                type="text"
                disabled
                defaultValue={data?.userName}
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
    </div>
  );
};

export default Update;
