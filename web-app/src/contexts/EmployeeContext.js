import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployee] = useState([
    {
      id: 1000,
      name: "John Doe",
      email: "rey.Padberg@karina.biz",
      phone: "31428-2261",
    },
    {
      id: 1002,
      name: "Kurtis Weissnat",
      email: "telly.Hoeger@billy.biz",
      phone: "58804-1099",
    },
    {
      id: 1003,
      name: "Chelsey Dietrich",
      email: "lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
    },
    {
      id: 1004,
      name: "Mrs. Dennis Schulist",
      email: "karley_Dach@jasper.info",
      phone: "23505-1337",
    },
  ]);

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
    axios.get("http://localhost:8000/employees").then((response) => {
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
