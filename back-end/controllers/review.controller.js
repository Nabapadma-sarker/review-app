const Review = require("../models/review");
const PerformanceReview = require("../models/review");

// Create and Save a new PerformanceReview
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Review
  const review = new PerformanceReview({
    employeeId: req.body.employeeId,
    rating: req.body.rating,
    feedback: req.body.feedback,
    givenBy: req.body.givenBy,
  });

  // Save Review in the database
  PerformanceReview.create(review, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review.",
      });
    else res.send(data);
  });
};

// Retrieve all Reviews from the database.
exports.findAll = (req, res) => {
  PerformanceReview.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving review.",
      });
    else res.send(data);
  });
};

// Find a single Review with a id
exports.findOne = (req, res) => {
  PerformanceReview.findById(req.params.reviewId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Review with id ${req.params.reviewId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retriving Review with id " + req.params.reviewId,
        });
      }
    } else res.send(data);
  });
};

// Update a Review identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  PerformanceReview.updateById(
    req.params.reviewId,
    new Review(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Review with id ${req.params.reviewId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Review with id " + req.params.reviewId,
          });
        }
      } else res.send(data);
    }
  );
};
