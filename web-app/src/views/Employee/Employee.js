import React, { useState } from "react";
import Photo from "../../assets/images/profile.jpg";
// import { EmployeeContext } from "../../contexts/EmployeeContext";

const Review = ({ employees, open }) => {
  const [assingTo, setAssignTo] = useState(false);
  // const { removeEmployee } = useContext(EmployeeContext);

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
        <i className="fas fa-star is-reviewed"></i>
      </div>
      <h5
        className="assing-to"
        title="Click to assign review"
        onClick={() => setAssignTo(!assingTo)}
      >
        <i className="fas fa-user-edit" /> Assign to
      </h5>

      {assingTo && (
        <input
          type="text"
          className="form-control"
          placeholder="assignto@example.com"
          onChange={() => {}}
        />
      )}

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
        <button type="button" className="btn btn-gray">
          Edit
        </button>
        <button type="button" className="btn btn-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Review;
