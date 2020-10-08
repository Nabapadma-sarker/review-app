const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const employeeRoutes = require("./app/routes/employee.routes");
const reviewRoutes = require("./app/routes/review.routes");
require('dotenv').config();
const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(employeeRoutes);
app.use(reviewRoutes);

// Node/Express server
const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
