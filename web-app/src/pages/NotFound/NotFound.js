import React from "react";
import "./NotFound.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="page-404">
        <h3 className="not-found-heading">
          <code className="text-danger">404</code> Page Not Found
        </h3>
        <p>Sorry, that page does not exits!</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
