import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const Navbar = () => {
  const { user, userLogeOut } = useAuth();
  const navigate = useNavigate();
  const [userRole] = useRole();
  console.log(userRole);

  const handleLogOut = () => {
    userLogeOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Classes
        </NavLink>
      </li>
      {user && userRole?.admin?.admin && (
        <>
          {" "}
          <li>
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      {user && userRole?.instructor?.instructor && (
        <>
          {" "}
          <li>
            <NavLink
              to="/dashboard/instructor-home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      {user && userRole?.student?.student && (
        <>
          {" "}
          <li>
            <NavLink
              to="/dashboard/student-home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-xl fixed top-0 left-0 w-full z-50  px-4 md:px-16 lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <div>
          <img
            className="w-20 h-12"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/crouch-photographer-1651942-1403701.png"
            alt=""
          />
          <br />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {user?.photoURL && (
              <div className="avatar">
                <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            )}
            <button
              onClick={handleLogOut}
              className="ms-3 btn btn-sm btn-secondary"
            >
              LogOut
            </button>{" "}
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className="btn btn-sm btn-secondary">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
