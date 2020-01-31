import React from "react";

const ReviewText = ({ message, imageUrl, title }) => {
  return (
    <div className="review-text-container mt-xs-1">
      <div className="overflow-hidden wt-text-body-01">
        <div className="max-height-text-container is-long break-word">
          <div className="text-gray prose" id="review-preview-toggle-0">
            <div>{message}</div>
          </div>
        </div>
      </div>
      <a
        className="flag text-gray text-decoration-none mt-xs-3"
        data-review-link=""
      >
        <div className="flag-img">
          <img
            className="bg-gray-darker review-listing-card"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="flag-body text-gray-lightest text-link-underline">
          <div className="text-truncate  max-width-220px">
            <span className="wt-text-caption">{title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReviewText;
