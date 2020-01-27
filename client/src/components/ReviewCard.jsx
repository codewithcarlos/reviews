import React from "react";
import ReviewFlag from "./ReviewFlag.jsx";
import ReviewText from "./ReviewText.jsx";
import ReviewHelpfulButton from "./ReviewHelpfulButton.jsx";

const ReviewCard = () => {
  return (
    <div className="display-flex-xs flex-direction-row-xs col-xs-12 p-xs-0">
      <div className="col-xs-12 p-xs-0">
        <ReviewFlag />
        <ReviewText />
        <ReviewHelpfulButton />
      </div>
    </div>
  );
};

export default ReviewCard;
