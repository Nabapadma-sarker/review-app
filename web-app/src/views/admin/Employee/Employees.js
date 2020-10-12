import React, { useState, useContext } from "react";
import "./Employees.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee/AddEmployee";
import EditEmployee from "./EditEmployee/EditEployee";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
import Modal from "../../../components/Modal/Modal";
import axios from "axios";

const Employees = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);
  const [reviewModal, setReviewModal] = useState(false);
  const { employees, removeEmployee } = useContext(EmployeeContext);

  const modalToggle = () => {
    setModal(!modal);
  };

  const editModalData = (employee) => {
    console.log(employee);
    setEditEmployee(employee);
    setEditModal(!editModal);
  };


  const editModalToggle = () => {
    setEditModal(!editModal);
  };

  const deleteEmployee = (employee)=>{
    axios.delete(`http://localhost:8000/employees/${employee.id}`)
    .then((response) => {
      console.log(response);
      if(response.data){
        removeEmployee(employee.id);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const reviewModalToggle = () => {
    setReviewModal(!reviewModal);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="employee-list-top">
          <h3>Employee List</h3>
          <p>List of performance review employee</p>

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
          {employees.length > 0 ? (
            employees.map((employee) => (
              <Employee
                open={reviewModalToggle}
                openEditModal={editModalData}
                employDelete={deleteEmployee}
                key={employee.id}
                employees={employee}
              />
            ))
          ) : (
            <h1>Sorry, there is no employee lists.</h1>
          )}
        </div>
      </div>
      <Footer />

      {modal && (
        <>
          <div className="back-drop" onClick={modalToggle}></div>
          <div className="modal-wrap">
            <div className="modal-content">
              <AddEmployee closeModal={modalToggle} />
            </div>
          </div>
        </>
      )}

      {editModal && (
        <>
          <div className="back-drop" onClick={editModalToggle}></div>
          <div className="modal-wrap">
            <div className="modal-content">
              <EditEmployee closeModal={editModalToggle} editEmployeeInfo={editEmployee}/>
            </div>
          </div>
        </>
      )}

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

export default Employees;
