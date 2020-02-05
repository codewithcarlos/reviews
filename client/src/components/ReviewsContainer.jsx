import React from "react";
import Ratings from "./Ratings.jsx";
import ReviewCard from "./ReviewCard.jsx";
import ReviewsTab from "./ReviewsTab.jsx";

const ReviewsContainer = ({
  messages,
  values,
  reviewerAvatars,
  reviewerNames,
  reviewDates,
  reviewsCount,
  imageUrl,
  title,
  images
}) => {
  return (
    <div className="reviews-container appears-ready">
      <Ratings reviewsCount={reviewsCount} />
      <ReviewsTab />
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
          image={images[index]}
        />
      ))}
    </div>
  );
};

export default ReviewsContainer;
