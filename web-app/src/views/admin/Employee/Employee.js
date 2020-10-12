import React from "react";
import Photo from "../../../assets/images/profile.jpg";

const Employee = ({ employees, open, openEditModal, employDelete }) => {

  const { name, email, phone } = employees;
  return (
    <div className="employee-box">
      <img className="profile-photo" src={Photo} alt="" />
      <h4 className="employee-name">{name} </h4>
      <div className="star-review">
        <i className="fas fa-star is-reviewed"></i>
        <i className="fas fa-star is-reviewed"></i>
        <i className="fas fa-star is-reviewed"></i>
        <i className="fas fa-star is-reviewed"></i>
        <i className="fas fa-star"></i>
        <span className="review-rate"> 4</span>/5
      </div>

      <address>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Phone:</b> {phone}
        </p>
      </address>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className="btn-group">
        <button type="button" className="btn btn-edit" onClick={open}>
          Review
        </button>
        <button type="button" className="btn btn-close" onClick={()=>{ openEditModal(employees)}}>
          Edit
        </button>
        <button type="button" className="btn btn-remove" onClick={()=>{ employDelete(employees)}}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Employee;
