import React from "react";

const ReviewHelpfulButton = () => {
  return (
    <div className="display-inline-block mt-xs-3 ml-xs-8">
      <div
        data-action="helpful-voting-button"
        data-transaction-id="1741731688"
        data-listing-id="636119906"
      >
        <button
          className="wt-btn wt-btn--transparent wt-btn--small wt-nudge-t-1"
          aria-label="Is this review helpful?"
        >
          <span className="etsy-icon wt-icon--smaller">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5,19.053c-0.584,0-1.058-0.474-1.058-1.058v-10c0-0.584,0.474-1.058,1.058-1.058s1.058,0.474,1.058,1.058v10 C6.058,18.579,5.584,19.053,5,19.053z"></path>
              <path d="M20.318,11.382c0-0.509-0.35-0.92-0.817-1.051c-0.014-0.009-0.028-0.023-0.042-0.031l-0.481-0.12 c0.497-0.111,0.875-0.534,0.875-1.065c0-0.587-0.458-1.07-1.034-1.112c-0.046-0.024-4.412,0-4.412,0s1.08-2.647,0.664-4.573 c-0.224-1.035-1.075-1.263-1.25-0.904c-0.453,0.925-2.253,5.476-4.609,5.476c-0.926,0-2.221,0-2.221,0v9.996 c0,0,9.348,0.096,11.227-1.713c0.251-0.204,0.421-0.502,0.421-0.851c0-0.3-0.122-0.57-0.314-0.77c0.001,0,0.002-0.001,0.003-0.001 h0.404c0.626,0,1.134-0.508,1.134-1.134c0-0.353-0.171-0.656-0.424-0.864c-0.059-0.07-0.135-0.129-0.229-0.175 C19.822,12.49,20.318,11.994,20.318,11.382z"></path>
            </svg>
          </span>
          Is this review helpful?
        </button>
      </div>
    </div>
  );
};

export default ReviewHelpfulButton;
