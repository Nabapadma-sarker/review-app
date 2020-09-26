import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Photo from "../../assets/images/profile.jpg";

const Review = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Performance Review</h3>
          <p>List of performance reviews</p>
        </div>

        <div className="employee-list">
          <div className="employee-box">
            <img className="profile-photo" src={Photo} alt="" />
            <h4 className="employee-name">Ervin Howell</h4>
            <div className="star-review">
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
            </div>
            <address>
              <p>
                <b>Email:</b> refat@gmail.com
              </p>
              <p>
                <b>Phone:</b> 000-7777-5555
              </p>
            </address>
            <p>Reviewed</p>

            <div className="btn-group">
              <button type="button" className="btn btn-disable">
                Review
              </button>
            </div>
          </div>
          <div className="employee-box">
            <img className="profile-photo" src={Photo} alt="" />
            <h4 className="employee-name">John Doe</h4>
            <div className="star-review">
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
              <i className="fas fa-star is-reviewed"></i>
            </div>
            <address>
              <p>
                <b>Email:</b> refat@gmail.com
              </p>
              <p>
                <b>Phone:</b> 000-5555-9999
              </p>
            </address>
            <p>Reviewed</p>

            <div className="btn-group">
              <button type="button" className="btn btn-disable">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Review;
