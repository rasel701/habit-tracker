import React from "react";
import Navber from "../components/Navber/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const Root = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>{navigation.state === "loading" ? <Loading /> : <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
