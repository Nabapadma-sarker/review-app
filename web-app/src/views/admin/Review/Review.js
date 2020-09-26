import React, { useState, useContext } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Photo from "../../../assets/images/profile.jpg";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
import Modal from "../../../components/Modal/Modal";

const Review = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const { employees } = useContext(EmployeeContext);

  const reviewModalToggle = () => {
    setReviewModal(!reviewModal);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Reviews</h3>
          <p>List of reviews</p>
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
                <b>Email:</b> example@example.com
              </p>
              <p>
                <b>Phone:</b> 000-7777-5555
              </p>
              <p>
                <b>Status:</b> Reviewed
              </p>
              <p>
                <b>Review by:</b> John Doe
              </p>
              <p>
                <b>Date & Time:</b> 15:30:45, 10-15-2020
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
            <h4 className="employee-name">Max William</h4>
            <div className="star-review">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <address>
              <p>
                <b>Email:</b> example@example.com
              </p>
              <p>
                <b>Phone:</b> 000-7777-5555
              </p>
              <p>
                <b>Status:</b> Not yet
              </p>
              <p>
                <b>Review by:</b> ------
              </p>
              <p>
                <b>Date & Time:</b> 00:00:00, 00-00-0000
              </p>
            </address>

            <div className="btn-group">
              <button type="button" className="btn btn-edit" onClick={reviewModalToggle}>
                Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {reviewModal && (
        <Modal title="Add review" closeModal={reviewModalToggle}>
          <div className="review-group">
            <label htmlFor="review-person">Review for:</label>
            <select name="review-person" id="review-person">
              <option defaultValue>Select one employee</option>
              {employees.map((employee) => (
                <option value={employee.name} key={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="review-group">
            <label htmlFor="points">Review points:</label>
            <select name="review-rate" id="review-rate">
              <option defaultValue>Select review point or rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="review-group">
            <textarea
              className="text-area"
              cols="3"
              rows="3"
              placeholder="Write something about review person"
            ></textarea>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Review;
