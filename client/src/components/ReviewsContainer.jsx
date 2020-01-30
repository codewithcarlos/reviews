import React from "react";
import Ratings from "./Ratings.jsx";
import ReviewCard from "./ReviewCard.jsx";

const ReviewsContainer = ({
  messages,
  values,
  reviewerAvatars,
  reviewerNames,
  reviewDates
}) => {
  return (
    <div className="reviews-container appears-ready">
      <Ratings />
      {messages.map((value, index) => (
        <ReviewCard
          message={messages[index]}
          reviewerAvatar={reviewerAvatars[index]}
          reviewerName={reviewerNames[index]}
          reviewDate={reviewDates[index]}
          key={index}
          values={values}
        />
      ))}
    </div>
  );
};

export default ReviewsContainer;
