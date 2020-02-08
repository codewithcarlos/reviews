import React from "react";

const ReviewsTab = ({
  reviewsForItem,
  reviewsCount,
  getSellerReviews,
  sellerTabSelected
}) => {
  return (
    <div className="wt-tab-container col-xs-12 pl-xs-0 wt-mb-xs-4">
      <div className="wt-tab" role="tablist" id="reviews-tab-list">
        <button
          className="wt-tab__item"
          aria-controls="same-listing-reviews-panel"
          aria-selected={!sellerTabSelected}
          role="tab"
          tabIndex="0"
          id="same-listing-reviews-tab"
          onClick={() => getSellerReviews("DESC", false)}
        >
          For this item ({reviewsForItem})
        </button>

        <button
          className="wt-tab__item"
          role="tab"
          aria-controls="shop-listing-reviews-panel"
          aria-selected={sellerTabSelected}
          tabIndex="1"
          id="shop-reviews-tab"
          onClick={() => getSellerReviews("ASC", true)}
        >
          For this shop ({reviewsCount})
        </button>
      </div>
    </div>
  );
};

export default ReviewsTab;
