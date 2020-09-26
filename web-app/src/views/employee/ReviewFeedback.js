import React from "react";

const ReviewFeedback = ({ name }) => {
  return (
    <>
      <div className="review-group">
        <label htmlFor="review-person">
          Review for: <strong>{name}</strong>
        </label>
      </div>

      <div className="review-group">
        <label htmlFor="points">Review points:</label>
        <select name="review-rate" id="review-rate">
          <option defaultValue>Select the review 1 to 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="review-group">
        <textarea
          className="text-area"
          cols="3"
          rows="3"
          placeholder={`Write something about ${name}`}
        ></textarea>
      </div>
    </>
  );
};

export default ReviewFeedback;
