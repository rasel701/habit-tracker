import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(UserAuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (name === user?.displayName && photo === user?.photoURL) {
      return toast.error("Please Enter your new name and new photo");
    }
    updateUser(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("porfile update successfully!");
        document.getElementById("my_modal_1").close();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="w-full min-h-screen p-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">My Profile</h2>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow"
            />

            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-semibold text-gray-600">
                {user?.displayName}
              </h3>
              <p className="text-gray-500">{user?.email}</p>
              <p className="text-sm text-gray-500">
                Joined: {new Date(user?.metadata?.creationTime).toDateString()}
              </p>
            </div>
          </div>

          {/* Editable Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500">Display Name</label>
              <input
                value={user?.displayName}
                className="input input-bordered w-full mt-1"
                disabled
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Photo URL</label>
              <input
                value={user?.photoURL}
                className="input input-bordered w-full mt-1"
                disabled
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                value={user?.email}
                disabled
                className="input input-bordered w-full mt-1 bg-gray-100 text-gray-600"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Account Created</label>
              <input
                value={new Date(
                  user?.metadata?.creationTime
                ).toLocaleDateString()}
                disabled
                className="input input-bordered w-full mt-1 bg-gray-100 text-gray-500"
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn btn-primary px-10"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-lg rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-700">Update Profile</h3>
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_1").close()}
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="text-sm text-gray-500">Display Name</label>
              <input
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered w-full mt-1"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Photo URL</label>
              <input
                defaultValue={user?.photoURL}
                name="photo"
                className="input input-bordered w-full mt-1"
                placeholder="Paste your photo link"
                required
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
                className="btn btn-outline"
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary px-8">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
