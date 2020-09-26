import React, { useContext } from "react";
import "./Assignment.css";
import Card from "../../components/Card/Card";
import { EmployeeContext } from "../../contexts/EmployeeContext";

const AddEmployee = ({ closeModal }) => {
  const { employees } = useContext(EmployeeContext);
  console.log(employees);

  return (
    <div className="modal-main">
      <Card>
        <div className="modal">
          <div className="modal-header">Review assignment</div>

          <div className="modal-body">
            <div className="assign-review">
              <div>
                <label>Assing to: </label>
                <select name="assignto" id="assignto">
                  <option defaultValue>Assign to review feefback</option>
                  {employees.map((employee) => (
                    <option value={employee.name} key={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Review for: </label>
                <select name="assignto" id="assignto">
                  <option defaultValue>Review for feefback</option>
                  {employees.map((employee) => (
                    <option value={employee.name} key={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModal}
              type="submit"
              className="btn btn-close"
            >
              Close
            </button>
            <button type="submit" className="btn btn-edit">
              Assign review
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddEmployee;
