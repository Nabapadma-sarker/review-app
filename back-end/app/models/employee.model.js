const db = require("./db");

// constructor
const Employee = function (employee) {
  this.name = employee.name;
  this.email = employee.email;
  this.phone = employee.phone;
};

Employee.create = (newEmployee, result) => {
  const sql = "INSERT INTO employees SET ?";
  db.query(sql, newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created employee: ", { id: res.insertId, ...newEmployee });
    result(null, { id: res.insertId, ...newEmployee });
  });
};

Employee.findById = (employeeId, result) => {
  const sql = `SELECT * FROM employees WHERE id = ${employeeId}`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found employee with the id
    result({ kind: "not_found" }, null);
  });
};

Employee.getAll = (result) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("employees: ", res);
    result(null, res);
  });
};

Employee.updateById = (id, employee, result) => {
  const sql =
    "UPDATE employees SET name = ?, email = ?, phone = ? WHERE id = ?";
  db.query(
    sql,
    [employee.name, employee.email, employee.phone, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found employee with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated employee: ", { id: id, ...employee });
      result(null, { id: id, ...employee });
    }
  );
};

Employee.remove = (id, result) => {
  const sql = "DELETE FROM employees WHERE id = ?";
  db.query(sql, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found employee with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted employee with id: ", id);
    result(null, res);
  });
};

module.exports = Employee;
