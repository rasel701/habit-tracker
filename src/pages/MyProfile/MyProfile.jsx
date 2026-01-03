import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";

const MyProfile = () => {
  const { user } = useContext(UserAuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile update feature coming soon 😉");
  };
  return (
    <div>
      <div className="w-full min-h-screen p-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">My Profile</h2>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={photo}
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
          <form
            onSubmit={handleUpdate}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="text-sm text-gray-500">Display Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Photo URL</label>
              <input
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered w-full mt-1"
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
              <button className="btn btn-primary px-10">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
