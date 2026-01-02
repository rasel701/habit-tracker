import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { UserAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import {
  Moon,
  Sun,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  User,
} from "lucide-react";

const Navber = () => {
  const { user, logoutUser } = useContext(UserAuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Theme Change Logic
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const helloFun = () => {
    alert("Hello Users");
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
        <CustomNavLink to={"/about"}>About</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={"/featured-habits"}>Featured Habits</CustomNavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <CustomNavLink to={"/add-habit"}>Add Habit</CustomNavLink>
          </li>

          <li>
            <CustomNavLink to={"/my-habit"}>My Habit</CustomNavLink>
          </li>
          <li>
            <CustomNavLink>
              <li>
                <CustomNavLink to="/dashboard">Dashboard</CustomNavLink>
              </li>
            </CustomNavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    // <div className="max-w-[90%] mx-auto ">
    //   <div className="navbar bg-base-100 shadow-sm px-2">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             {" "}
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />{" "}
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex="-1"
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50  mt-3 w-52 p-2 shadow "
    //         >
    //           {links}
    //         </ul>
    //       </div>

    //       <div>
    //         <button className="btn-logo">
    //           <i className="animation"></i>Habit Tracker
    //           <i className="animation"></i>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">{links}</ul>
    //     </div>
    //     <div className="navbar-end">
    //       {user ? (
    //         <div className="dropdown dropdown-bottom mx-9 dropdown-center">
    //           <div>
    //             <img
    //               className="w-[60px] h-[60px] object-cover rounded-full cursor-pointer mx-2"
    //               tabIndex={0}
    //               role="button"
    //               referrerPolicy="no-referrer"
    //               src={user?.photoURL}
    //               alt={user?.displayName}
    //             />
    //           </div>
    //           <ul
    //             tabIndex="-1"
    //             className="dropdown-content menu bg-base-100 rounded-box z-50 w-45 p-2 shadow-sm md:w-65  "
    //           >
    //             <li className="md:text-lg text-[12px]">{user?.displayName}</li>
    //             <li className=" text-[12px] md:text-lg my-2">{user?.email}</li>
    //             <div>
    //               <button onClick={handleLogout} className="btn-all rounded-lg">
    //                 Logout
    //               </button>
    //             </div>
    //           </ul>
    //         </div>
    //       ) : (
    //         <Link to={"/login"} className="btn-all rounded-lg">
    //           Login
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="sticky top-0 z-[100] w-full backdrop-blur-lg bg-base-100/80 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <Menu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">
              HABIT<span className="text-secondary">TRACKER</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar hover:opacity-80 transition"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/mDPt7vX/user.png"}
                    alt="User Profile"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-60 border border-base-200"
              >
                <div className="px-4 py-3 border-b border-base-200 mb-2">
                  <p className="font-bold text-sm">{user?.displayName}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 py-3"
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="flex items-center gap-2 py-3">
                    <User size={18} /> Profile
                  </Link>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 py-3 text-error hover:bg-error/10"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn btn-primary btn-sm md:btn-md rounded-lg px-6"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
