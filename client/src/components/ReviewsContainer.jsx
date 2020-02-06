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
  if (messages.length === 1 && messages[0] === null) {
    return <div>No Reviews Yet!</div>;
  } else {
    return (
      <div className="reviews-container appears-ready">
        <Ratings reviewsCount={reviewsCount} />
        <ReviewsTab />
        {messages.map(
          (value, index) =>
            messages[index] !== null && (
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
            )
        )}
        <button
          type="button"
          aria-label="more"
          className="btn btn-link b pl-xs-1 pl-md-0 pt-xs-2 pr-xs-2 pr-md-0 "
        >
          <span aria-hidden="true">+ More</span>
        </button>
      </div>
    );
  }
};

export default ReviewsContainer;
