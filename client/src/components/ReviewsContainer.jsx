import React from "react";
import Ratings from "./Ratings.jsx";
import ReviewCard from "./ReviewCard.jsx";
import ReviewsTab from "./ReviewsTab.jsx";

const ReviewsContainer = ({
  messages,
  reviewerAvatars,
  reviewerNames,
  reviewDates,
  reviewsCount,
  reviewsForItem,
  imageUrl,
  title,
  images,
  getMoreReviews,
  showMoreButton,
  getSellerReviews,
  sellerTabSelected
}) => {
  return (
    <div className="reviews-container appears-ready">
      <Ratings reviewsCount={reviewsCount} />
      {reviewsForItem !== reviewsCount && (
        <ReviewsTab
          reviewsCount={reviewsCount}
          reviewsForItem={reviewsForItem}
          getSellerReviews={getSellerReviews}
          sellerTabSelected={sellerTabSelected}
        />
      )}
      {messages.map(
        (value, index) =>
          (sellerTabSelected
            ? index < reviewsCount
            : index < reviewsForItem) && (
            <ReviewCard
              message={messages[index]}
              reviewerAvatar={reviewerAvatars[index]}
              reviewerName={reviewerNames[index]}
              reviewDate={reviewDates[index]}
              key={index}
              imageUrl={imageUrl}
              title={title}
              image={images[index]}
            />
          )
      )}
      <button
        type="button"
        aria-label="more"
        className={
          showMoreButton
            ? "btn btn-link b pl-xs-1 pl-md-0 pt-xs-2 pr-xs-2 pr-md-0"
            : "btn btn-link b pl-xs-1 pl-md-0 pt-xs-2 pr-xs-2 pr-md-0 hide"
        }
        onClick={() =>
          sellerTabSelected ? getMoreReviews("ASC") : getMoreReviews("DESC")
        }
      >
        <span aria-hidden="true">+ More</span>
      </button>
    </div>
  );
};

export default ReviewsContainer;
