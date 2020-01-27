import React from "react";
import Star from "./Star.jsx";

const ReviewFlag = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="flag">
      <div className="flag-img vertical-align-top">
        <a href="#" tabIndex="-1" aria-hidden="true">
          <img
            className="circle bg-gray-darker width-50px height-50px"
            src="https://i.etsystatic.com/iusa/6fa600/29272085/iusa_75x75.29272085_2jnf.jpg?version=0"
            data-pin-nopin="true"
            alt=""
          />
        </a>
      </div>
      <div className="flag-body text-gray-darker text-body">
        <a className="text-link-underline display-inline-block" href="#">
          Diane Villadsen
        </a>
        <span>&nbsp;</span>Jan 3, 2020
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
