import React from "react";
import Star from "./Star.jsx";

const Ratings = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="col-group mt-xs-1 mt-md-2 bg-white b-md-1 b-lg-0 pl-xs-2 pr-xs-2 pb-xs-2 pt-md-1 pl-lg-0 pr-lg-0">
      <div className="ratings col-xs-12 pl-lg-0 pr-lg-0 pb-xs-3">
        <div className="aggregate_rating display-flex-xs align-items-center mt-xs-2">
          <h3 className="text-body-larger strong mr-xs-2 ">Reviews</h3>
          <span>
            {arr.map((star, key) => (
              <Star key={key} />
            ))}
          </span>
          <span>
            <span className="pl-xs-1 text-gray-lighter">(46)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
