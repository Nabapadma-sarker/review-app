const express = require("express");

const employees = require("../controllers/employee.controller");

const route = express.Router();

route.post("/employees", employees.create);
route.get("/employees", employees.findAll);
route.get("/employees/:employeeId", employees.findOne);
route.put("/employees/:employeeId", employees.update);
route.delete("/employees/:employeeId", employees.delete);

module.exports = route;
