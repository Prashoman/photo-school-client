import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300 shadow-sm fixed top-0 left-0 w-full z-50  px-4 md:px-16 lg:px-24">
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
        <Link to="/login" className="btn btn-sm btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
