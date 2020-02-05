import React from "react";

const ReviewsTab = () => {
  return (
    <div className="wt-tab-container col-xs-12 pl-xs-0 wt-mb-xs-4">
      <div className="wt-tab" role="tablist" id="reviews-tab-list">
        <button
          className="wt-tab__item"
          aria-controls="same-listing-reviews-panel"
          aria-selected="true"
          role="tab"
          tabIndex="0"
          id="same-listing-reviews-tab"
        >
          For this item (12)
        </button>
        <button
          className="wt-tab__item"
          role="tab"
          aria-controls="shop-listing-reviews-panel"
          aria-selected="false"
          tabIndex="1"
          id="shop-reviews-tab"
        >
          For this shop (285)
        </button>
      </div>
    </div>
  );
};

export default ReviewsTab;
