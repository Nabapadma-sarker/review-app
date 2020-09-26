const db = require("./db");

// constructor
const Review = function (review) {
  this.employeeId = review.employeeId;
  this.rating = review.rating;
  this.feedback = review.feedback;
  this.givenBy = review.givenBy;
};

Review.create = (newReview, result) => {
  const sql = "INSERT INTO reviews SET ?";
  db.query(sql, newReview, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created review: ", { id: res.insertId, ...newReview });
    result(null, { id: res.insertId, ...newReview });
  });
};

Review.findById = (reviewId, result) => {
  const sql = `SELECT * FROM reviews WHERE id = ${reviewId}`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found review: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found employee with the id
    result({ kind: "not_found" }, null);
  });
};

Review.getAll = (result) => {
  const sql = "SELECT * FROM reviews";
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("reviews: ", res);
    result(null, res);
  });
};

Review.updateById = (id, review, result) => {
  const sql =
    "UPDATE reviews SET employeeId = ?, rating = ?, feedback = ?, givenBy = ? WHERE id = ?";
  db.query(
    sql,
    [review.employeeId, review.rating, review.feedback, review.givenBy, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found review with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated review: ", { id: id, ...review });
      result(null, { id: id, ...review });
    }
  );
};

module.exports = Review;
