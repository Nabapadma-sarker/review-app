const express = require("express");

const review = require("../controllers/review.controller");

const route = express.Router();

route.post("/reviews", review.create);
route.get("/reviews", review.findAll);
route.get("/reviews/:reviewId", review.findOne);
route.put("/reviews/:reviewId", review.update);

module.exports = route;
