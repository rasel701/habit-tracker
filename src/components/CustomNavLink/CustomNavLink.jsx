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
    </NavLink>
  );
};

export default CustomNavLink;
