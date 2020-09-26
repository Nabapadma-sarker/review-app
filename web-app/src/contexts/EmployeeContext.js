import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployee] = useState([]);

  const addEmployee = (employee) => {
    setEmployee((preEmployee) => [
      ...preEmployee,
      { id: preEmployee.length + 1, ...employee },
    ]);
  };

  const removeEmployee = (id) => {
    setEmployee((preEmployee) =>
      preEmployee.filter((employee) => employee.id !== id)
    );
  };

  const editEmployee = (id, editEmployee) => {
    setEmployee(
      employees.map((employee) =>
        employee.id === id ? editEmployee : employee
      )
    );
  };

  // Get request by axios
  useEffect(() => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setEmployee(response.data);
    });
  }, []);

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, removeEmployee, editEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
