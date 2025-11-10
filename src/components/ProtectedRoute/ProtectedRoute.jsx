import React, { useContext } from "react";
import { UserAuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading/Loading";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserAuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default ProtectedRoute;
