import React from "react";
import Navber from "../components/Navber/Navber";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
