import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Photo from "../../assets/images/profile.jpg";
import ReviewFeedback from "./ReviewFeedback";

const Assignment = () => {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Assignment List</h3>
          <p>List of assignment</p>
          <div
            type="button"
            className="add-employee-button"
            onClick={modalToggle}
          >
            <i
              className="fas fa-plus-circle fa-2x"
              title="add new employee"
            ></i>
          </div>
        </div>

        <div className="employee-list">
          <div className="employee-box">
            <img className="profile-photo" src={Photo} alt="" />
            <h4 className="employee-name">Leanne Graham</h4>
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
                <b>Phone:</b> 000-3333-7777
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
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <address>
              <p>
                <b>Email:</b> refat@gmail.com
              </p>
              <p>
                <b>Phone:</b> 000-4444-5555
              </p>
            </address>
            <p>Review pending</p>

            <div className="btn-group">
              <button type="button" className="btn btn-edit">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {modal && (
        <div>
          <div className="back-drop" onClick={modalToggle}></div>
          <div className="modal-wrap">
            <div className="modal-content">
              <ReviewFeedback closeModal={modalToggle} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assignment;
