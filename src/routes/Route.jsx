import { createBrowserRouter } from "react-router";
import Root from "../roots/Root";
import Home from "../pages/Home/Home";
import MyHabit from "../pages/MyHabit/MyHabit";
import AddHabit from "../pages/AddHabit/AddHabit";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PublicHabit from "../pages/PublicHabit/PublicHabit";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/my-habit",
        element: (
          <ProtectedRoute>
            <MyHabit />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-habit",
        element: (
          <ProtectedRoute>
            <AddHabit />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/public-habit",
        Component: PublicHabit,
      },
    ],
  },
]);
export default route;
