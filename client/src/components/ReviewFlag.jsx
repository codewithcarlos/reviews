import React from "react";
import Star from "./Star.jsx";

const ReviewFlag = ({ value, reviewerAvatar, reviewerName, reviewDate }) => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="flag">
      <div className="flag-img vertical-align-top">
        <a  tabIndex="-1" aria-hidden="true">
          <img
            className="circle bg-gray-darker width-50px height-50px"
            src={reviewerAvatar}
            data-pin-nopin="true"
            alt=""
          />
        </a>
      </div>
      <div className="flag-body text-gray-darker text-body">
        <a className="text-link-underline display-inline-block" >
          {reviewerName}
        </a>
        <span>&nbsp;</span>
        {reviewDate}
      </div>
      <div className="display-block mb-xs-1">
        {arr.map((star, key) => (
          <Star key={key} />
        ))}
      </div>
    </div>
  );
};

export default ReviewFlag;
