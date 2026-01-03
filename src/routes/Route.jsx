import { createBrowserRouter } from "react-router";
import Root from "../roots/Root";
import Home from "../pages/Home/Home";
import MyHabit from "../pages/MyHabit/MyHabit";
import AddHabit from "../pages/AddHabit/AddHabit";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PublicHabit from "../pages/PublicHabit/PublicHabit";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Update from "../pages/Update/Update";
import axios from "axios";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Loading from "../components/Loading/Loading";
import NotFound from "../pages/NotFound/NotFound";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../pages/DahsboardHome/DashboardHome";
import WeeklySummary from "../pages/WeeklySummary/WeeklySummary";
import MyProfile from "../pages/MyProfile/MyProfile";

const route = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loading />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => axios("https://habit-server-psi.vercel.app/habit-latest"),
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
        path: "/blog-details/:id",
        Component: BlogDetails,
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
        loader: () => axios("https://habit-server-psi.vercel.app/habit-info"),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          axios(`https://habit-server-psi.vercel.app/habit-info/${params.id}`),
      },
      {
        path: "/details-page/:id",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "my-habit",
        element: (
          <ProtectedRoute>
            <MyHabit />
          </ProtectedRoute>
        ),
      },
      {
        path: "weekly-summary",
        element: <WeeklySummary />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default route;
