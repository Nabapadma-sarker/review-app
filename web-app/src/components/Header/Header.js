import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <Link className="navbar-brand" to="/employees">
          <img
            src="https://image.paypay.ne.jp/page/common/images/img_logo.png"
            alt="logo"
          />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/employees">
              Employee
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/assingment">
              Assignment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
