import React, { useState, useContext } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Photo from "../../../assets/images/profile.jpg";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
import Modal from "../../../components/Modal/Modal";

const Assignment = () => {
  const [assign, setAssignModal] = useState(false);
  const { employees } = useContext(EmployeeContext);

  const assignModalToggle = () => {
    setAssignModal(!assign);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Assignment List</h3>
          <p>List of assignment</p>
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
                Assign
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
                <b>Status:</b> Not yet
              </p>
            </address>

            <div className="btn-group">
              <button type="button" className="btn btn-edit" onClick={assignModalToggle}>
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {assign && (
        <Modal title="Assign for review" closeModal={assignModalToggle}>
          <div className="review-group">
            <label htmlFor="assign-for">Assign to:</label>
            <select name="review-person" id="assign-for">
              <option defaultValue>Select assign employee</option>
              {employees.map((employee) => (
                <option value={employee.name} key={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="review-group">
            <label htmlFor="assign-to">Review for:</label>
            <select name="review-person" id="assign-to">
              <option defaultValue>Select review employee</option>
              {employees.map((employee) => (
                <option value={employee.name} key={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
          <div className="review-group">
            <textarea
              className="text-area"
              cols="3"
              rows="3"
              placeholder="comments"
            ></textarea>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Assignment;
