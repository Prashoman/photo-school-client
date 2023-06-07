import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useRole from "../Hooks/useRole";

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
            {userRole.admin.admin && (
              <>
                <NavLink
                  to="/dashboard/manage-class"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Manage Classes
                </NavLink>
                <NavLink
                  to="/dashboard/all-users"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Manage Users
                </NavLink>
              </>
            )}
            {userRole.instructor.instructor && (
              <>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </>
            )}
            {userRole.student.student && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
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
