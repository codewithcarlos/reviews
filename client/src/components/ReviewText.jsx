import React from "react";

const ReviewText = () => {
  return (
    <div className="review-text-container mt-xs-1">
      <div className="overflow-hidden wt-text-body-01">
        <div className="max-height-text-container is-long break-word">
          <div className="text-gray prose" id="review-preview-toggle-0">
            <div>
              100% obsessed with this pot. Flawlessly made and so unique. Also
              appreciated the biodegradable cornstarch peanuts in the packaging!
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="flag text-gray text-decoration-none mt-xs-3"
        data-review-link=""
      >
        <div className="flag-img">
          <img
            className="bg-gray-darker review-listing-card"
            src="https://i.etsystatic.com/6297064/c/547/435/154/355/il/90ac06/1998744119/il_75x75.1998744119_qbr5.jpg"
            alt="Diane Villadsen reviewed DASH Pots"
          />
        </div>
        <div className="flag-body text-gray-lightest text-link-underline">
          <div className="text-truncate  max-width-220px">
            <span className="wt-text-caption">DASH Pots</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReviewText;
