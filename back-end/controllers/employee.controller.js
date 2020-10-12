const Employee = require('../models').employee;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save Employee in the database
  Employee.create(req.body).then (result=>{
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
exports.update = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const saveEmployee = await Employee.findByPk(req.params.employeeId);
  if (saveEmployee === null) {
    console.log('Not found!');
  } 
  else {
    saveEmployee.update(req.body)
    .then((response)=>{
      console.log(response.dataValues);
      res.send(response.dataValues);
    })
    .catch(error=>{
         console.log(error);
         req.status(500).send("An error occured");
     });
  }
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.employeeId
    }
  })
  .then((response)=>{
    console.log(response);
    res.status(200).send(response.toString());
  })
  .catch(error=>{
       console.log(error);
       req.status(500).send("An error occured");
   });
};
