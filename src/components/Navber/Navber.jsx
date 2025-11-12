import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { UserAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

const Navber = () => {
  const { user, logoutUser } = useContext(UserAuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <li>
        <CustomNavLink to={"/"}>Home</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={"/public-habit"}>Public Habits</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={"/add-habit"}>Add Habit</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={"/my-habit"}>My Habit</CustomNavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-[90%] mx-auto ">
      <div className="navbar bg-base-100 shadow-sm px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50  mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>

          <div>
            <button className="btn-logo">
              <i className="animation"></i>Habit Tracker
              <i className="animation"></i>
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-bottom mx-9 dropdown-center">
              <div>
                <img
                  className="w-[60px] h-[60px] object-cover rounded-full cursor-pointer mx-2"
                  tabIndex={0}
                  role="button"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-50 w-45 p-2 shadow-sm md:w-65  "
              >
                <li className="md:text-lg text-[12px]">{user?.displayName}</li>
                <li className=" text-[12px] md:text-lg my-2">{user?.email}</li>
                <div>
                  <button onClick={handleLogout} className="btn-all rounded-lg">
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn-all rounded-lg">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
