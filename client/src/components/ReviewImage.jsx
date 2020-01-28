import React from "react";

const ReviewImage = () => {
  return (
    <div className="mt-xs-4 ml-xs-2">
      <div className="wt-transparent-card">
        <div className="review-appreciation-photo">
          <button
            type="button"
            className="unstyled-button cursor-pointer "
            aria-label="View details of this review photo by Sara Cohen"
            aria-controls="customer-photo-overlay-1014491538"
            data-transaction-id="1014491538"
            alt="Buyer photo "
            data-js-action="openReviewPhotoOverlay"
          >
            <img
              className="width-full has-hover-state display-block bg-gray-darker"
              src="https://i.etsystatic.com/iap/a4ffc0/764430217/iap_300x300.764430217_9nkdk50c.jpg?version=0"
              data-pin-nopin="true"
              alt="Sara Cohen added a photo of their purchase"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewImage;
