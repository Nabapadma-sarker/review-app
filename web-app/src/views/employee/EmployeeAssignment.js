import React, { useState, useContext } from "react";
import Header from "../../components/Header/HeaderEmployee";
import Footer from "../../components/Footer/Footer";
import Photo from "../../assets/images/profile.jpg";
import Modal from "../../components/Modal/Modal";
import ReviewFeedback from './ReviewFeedback'
import { EmployeeContext } from "../../contexts/EmployeeContext";

const Assignment = () => {
  const { employees } = useContext(EmployeeContext);

  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Review</h3>
          <p>List of performance reviews requiring feedback</p>
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
              <p>
                <b>Status:</b> Reviewed
              </p>
            </address>

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
              <p>
                <b>Status:</b> Review not yet
              </p>
            </address>

            <div className="btn-group">
              <button type="button" className="btn btn-edit" onClick={modalToggle}>
                Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {modal && (
        <Modal title="Review feedback" closeModal={modalToggle}>
          <ReviewFeedback employees={employees} name="John Doe"/>
        </Modal>
      )}
    </>
  );
};

export default Assignment;
