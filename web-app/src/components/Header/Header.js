import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <Link className="navbar-brand" to="/admin/employees">
          {/* <img
            src="https://image.paypay.ne.jp/page/common/images/img_logo.png"
            alt="logo"
          /> */}
          <i className="fab fa-accusoft fa-3x"></i>
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/employees">
              Employees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/reviews">
              Reviews
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/assingment">
              Assigns
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
