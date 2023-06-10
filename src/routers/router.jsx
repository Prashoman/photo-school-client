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
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyAddedClass from "../Pages/Dashboard/InstructorDashboard/MyAddedClass";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClass";
import FeedBack from "../Pages/Dashboard/AdminDashboard/FeedBack";
import ClassUpdate from "../Pages/Dashboard/InstructorDashboard/ClassUpdate";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import AllClass from "../Pages/AllClass.jsx/AllClass";

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
        path: "/instructors",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/classes",
        element: <AllClass></AllClass>,
        loader: () => fetch("http://localhost:5000/all-classes"),
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
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <MyAddedClass></MyAddedClass>
          </InstructorRoute>
        ),
      },
      {
        path: "class-update/:id",
        element: (
          <InstructorRoute>
            <ClassUpdate></ClassUpdate>
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
      {
        path: "manage-class",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminRoute>
            <FeedBack></FeedBack>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
