import React from "react";
import Ratings from "./Ratings.jsx";
import ReviewCard from "./ReviewCard.jsx";

const ReviewsContainer = () => {
  return (
    <div className="reviews-container appears-ready">
      <Ratings />
      <ReviewCard />
    </div>
  );
};

export default ReviewsContainer;
