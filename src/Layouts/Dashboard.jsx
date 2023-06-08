import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useRole from "../Hooks/useRole";
import {
  FaCheckDouble,
  FaCommentDollar,
  FaHeart,
  FaHome,
  FaPlusSquare,
  FaRegBookmark,
  FaUserEdit,
} from "react-icons/fa";

const Dashboard = () => {
  const [userRole] = useRole();
  console.log(userRole);

  return (
    <div>
      <div className="mb-24">
        <Navbar></Navbar>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {userRole?.admin?.admin && (
              <>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/manage-class"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaCheckDouble></FaCheckDouble>
                    Manage Classes
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaUserEdit></FaUserEdit>
                    Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {userRole?.instructor?.instructor && (
              <>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/instructor-home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaHome></FaHome>
                    Instructor Home
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/add-class"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaPlusSquare></FaPlusSquare>
                    Add a Class
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/my-class"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaHeart></FaHeart>
                    My Class
                  </NavLink>
                </li>
              </>
            )}
            {userRole?.student?.student && (
              <>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/student-home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaHome></FaHome>
                    Student Home
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaRegBookmark></FaRegBookmark>
                    My Selected Classes
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaHeart></FaHeart>
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaCommentDollar></FaCommentDollar>
                    Payment History page
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
