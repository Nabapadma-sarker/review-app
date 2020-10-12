import React, { useState, useContext} from "react";
import "./EditEmployee.css";
import Card from "../../../../components/Card/Card";
import { EmployeeContext } from "../../../../contexts/EmployeeContext";
import axios from "axios";

const EditEployee = ({ closeModal, editEmployeeInfo }) => {
  const [employee, setEmployee] = useState(editEmployeeInfo);

  const [error, setError] = useState({});

  const { editEmployee } = useContext(EmployeeContext);

  const { name, email, phone } = employee;

  // onSubmit handler
  const onSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      return setError({
        name: "Name is required",
      });
    }

    if (email === "") {
      return setError({
        email: "Email is required",
      });
    }

    if (phone === "") {
      return setError({
        phone: "Phone is required",
      });
    }

    const content = {
      name,
      email,
      phone,
    };
    console.log(employee.id);
    const url = `http://localhost:8000/employees/${employee.id}`;
    axios.put(url, content).then(response => {
      console.log(response);
      editEmployee(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });


    // axios.post('http://localhost:8000/employees', newEmployee)
    // .then(function (response) {
    //   console.log(response);
    //   // setEmployee();
    //   addEmployee(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // console.log(newEmployee);

    setEmployee({
      name: "",
      email: "",
      phone: "",
    });

    setError({});
    closeModal();

    // props.history.push("/");

    // console.log(props)

  };

  // input onChange handler
  const onChange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  return (
    <div className="modal-main">
      <Card>
        <div className="modal">
          <div className="modal-header">Edit employee</div>

          <div className="modal-body">
            <form onSubmit={onSubmit} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="John Doe"
                  onChange={onChange}
                  className={error.name ? "is-invalid" : ""}
                />
                <sub className={error.name ? "invalid-feedback" : "is-valid"}>
                  {error.name}
                </sub>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="hakkani@gmail.com"
                  onChange={onChange}
                  className={error.name ? "is-invalid" : ""}
                />
                <sub className={error.email ? "invalid-feedback" : "is-valid"}>
                  {error.email}
                </sub>
              </div>

              <div className="form-group">
                <label htmlFor="pgone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  placeholder="070-38469428"
                  onChange={onChange}
                  className={error.phone ? "is-invalid" : ""}
                />
                <sub className={error.phone ? "invalid-feedback" : "is-valid"}>
                  {error.phone}
                </sub>
              </div>

              <div className="modal-footer">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="btn btn-close"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-add">
                  Edit employee
                </button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditEployee;
