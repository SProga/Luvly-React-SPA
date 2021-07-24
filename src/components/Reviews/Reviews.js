import React from "react";
import classes from "./Reviews.module.scss";
import { reviews } from "../../toFirebase/data";

const Reviews = () => {
  const allReviews = reviews.map((review) => {
    return (
      <div key={review.id} className={classes["review-group"]}>
        <h1 className={classes["review-title"]}>
          {review.amount}
          <span className={classes.plus}>+</span>
        </h1>
        <p className={classes["review-text"]}>{review.text}</p>
      </div>
    );
  });

  return (
    <div className={classes.review}>
      <div className={classes["review-content"]}>{allReviews}</div>
    </div>
  );
};

export default Reviews;
