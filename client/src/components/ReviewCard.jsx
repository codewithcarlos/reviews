import React from "react";
import ReviewFlag from "./ReviewFlag.jsx";
import ReviewText from "./ReviewText.jsx";
import ReviewHelpfulButton from "./ReviewHelpfulButton.jsx";
import ReviewImage from "./ReviewImage.jsx";

const ReviewCard = () => {
  return (
    <div className="display-flex-xs flex-direction-row-xs col-xs-12 p-xs-0">
      <div className="col-xs-12 p-xs-0">
        <ReviewFlag />
        <ReviewText />
        <ReviewHelpfulButton />
      </div>
      < ReviewImage />
    </div>
  );
};

export default ReviewCard;
