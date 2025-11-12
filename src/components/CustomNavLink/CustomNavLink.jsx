import { NavLink } from "react-router";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-4 py-2 rounded-md font-medium transition-all duration-300
        ${
          isActive
            ? "text-white bg-blue-600 shadow-md"
            : "text-blue-600 hover:bg-blue-100"
        }`
      }
    >
      {children}

      {/* Small check mark when active */}
      {({ isActive }) =>
        isActive && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
            ✔
          </span>
        )
      }
    </NavLink>
  );
};

export default CustomNavLink;
