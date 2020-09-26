import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <Link className="navbar-brand" to="/">
          <img
            src="https://image.paypay.ne.jp/page/common/images/img_logo.png"
            alt="logo"
          />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Reviewe List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
