import React from "react";
import Ratings from "./Ratings.jsx";
import ReviewCard from "./ReviewCard.jsx";

const ReviewsContainer = ({
  messages,
  values,
  reviewerAvatars,
  reviewerNames,
  reviewDates,
  reviewsCount,
  imageUrl,
  title
}) => {
  return (
    <div className="reviews-container appears-ready">
      <Ratings reviewsCount={reviewsCount} />
      {messages.map((value, index) => (
        <ReviewCard
          message={messages[index]}
          reviewerAvatar={reviewerAvatars[index]}
          reviewerName={reviewerNames[index]}
          reviewDate={reviewDates[index]}
          key={index}
          values={values}
          imageUrl={imageUrl}
          title={title}
        />
      ))}
    </div>
  );
};

export default ReviewsContainer;
