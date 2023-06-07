import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const student = true;
  const admin = false;
  const instructor = false;
  return (
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
          {admin && (
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
          {instructor && (
            <>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </>
          )}
          {student && (
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
  );
};

export default Dashboard;
