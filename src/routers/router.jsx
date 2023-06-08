import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/AuthDesign/Login/Login";
import Register from "../Pages/Shared/AuthDesign/Register/Register";
import Dashboard from "../Layouts/Dashboard";

import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser";
import StudentHome from "../Pages/Dashboard/StudentDashboard/StudentHome";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";

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
        path: "student-home",
        element: (
          <StudentRoute>
            <StudentHome></StudentHome>
          </StudentRoute>
        ),
      },

      //instructor route
      {
        path: "instructor-home",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },

      //admin route
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
