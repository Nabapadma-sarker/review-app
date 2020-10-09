const Employee = require('../models').employee;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Employee
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  // Save Employee in the database
  Employee.create(employee).then (result=>{
    console.log(result);
    res.status(200).send(result);
  }).catch(error=>{
      req.status(500).send("An error occured");
  });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  Employee.findAll().then (result=>{
      res.status(200).send(result);
  }).catch(error=>{
      req.status(500).send("An error occured");
  });
};

// Find a single Employee with a id
exports.findOne = (req, res) => {
  Employee.findById(req.params.employeeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id ${req.params.employeeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retriving Employee with id " + req.params.employeeId,
        });
      }
    } else res.send(data);
  });
};

// Update a Employee identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Employee.updateById(
    req.params.employeeId,
    new Employee(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with id ${req.params.employeeId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Employee with id " + req.params.employeeId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  Employee.remove(req.params.employeeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found EmployeeId with id ${req.params.employeeId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete EmployeeId with id " + req.params.employeeId,
        });
      }
    } else res.send({ message: `EmployeeId was deleted successfully!` });
  });
};
