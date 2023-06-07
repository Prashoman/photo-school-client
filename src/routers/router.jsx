import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/AuthDesign/Login/Login";
import Register from "../Pages/Shared/AuthDesign/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import StudentHome from "../Pages/StudenDashboard/StudentHome/StudentHome";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "all-users",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
