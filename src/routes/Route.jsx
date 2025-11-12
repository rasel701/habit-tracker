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

const route = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loading />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => axios("http://localhost:3000/habit-latest"),
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
        loader: () => axios("http://localhost:3000/habit-info"),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          axios(`http://localhost:3000/habit-info/${params.id}`),
      },
      {
        path: "/details-page/:id",
        element: (
          <ProtectedRoute>
            <DetailsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default route;
