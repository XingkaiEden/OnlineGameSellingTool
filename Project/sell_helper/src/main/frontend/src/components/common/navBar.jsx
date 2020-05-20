import React from "react";
import { Link, NavLink } from "react-router-dom";
//NavLink is just a container of Link, it has a "avtiveClassName".
// when the path match, it will automatically light up!!!
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        返回主页
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default NavBar;
