import React, { useState, useContext } from "react";
import Header from "../../components/Header/HeaderEmployee";
import Footer from "../../components/Footer/Footer";
import Photo from "../../assets/images/profile.jpg";
import Modal from "../../components/Modal/Modal";
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
          <h3>Assignment List</h3>
          <p>List of assignment review</p>
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
        <Modal title="Add review" closeModal={modalToggle}>
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

export default Assignment;
