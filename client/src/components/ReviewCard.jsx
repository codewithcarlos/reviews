import React from "react";
import ReviewFlag from "./ReviewFlag.jsx";
import ReviewText from "./ReviewText.jsx";
import ReviewHelpfulButton from "./ReviewHelpfulButton.jsx";
import ReviewImage from "./ReviewImage.jsx";

const ReviewCard = ({
  message,
  value,
  reviewerAvatar,
  reviewerName,
  reviewDate,
  imageUrl,
  title,
  image
}) => {
  return (
    <div className="display-flex-xs flex-direction-row-xs col-xs-12 p-xs-0 mb-sm-8">
      <div className="col-xs-12 p-xs-0">
        <ReviewFlag
          value={value}
          reviewerAvatar={reviewerAvatar}
          reviewerName={reviewerName}
          reviewDate={reviewDate}
        />
        <ReviewText message={message} imageUrl={imageUrl} title={title} />
        <ReviewHelpfulButton />
      </div>
      <ReviewImage image={image} />
    </div>
  );
};

export default ReviewCard;
