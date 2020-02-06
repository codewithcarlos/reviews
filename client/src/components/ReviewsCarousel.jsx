import React from "react";

const ReviewsCarousel = () => {
  return (
    <div>
      <div className="customer-photos customer-photos-carousel clearfix mb-xs-3 appears-ready">
        <div className="review-carousel-header">
          <div className="pl-xs-0">
            <h3 className="strong pr-xs-2 pt-xs-2 text-gray text-body">
              Photos from reviews
            </h3>
          </div>
          <div className="carousel-navigate">
            <span>
              <button className="prev btn btn-icon btn-transparent">
                {" "}
                &lt;{" "}
              </button>
              <button className="prev btn btn-icon btn-transparent">
                {" "}
                &gt;{" "}
              </button>
            </span>
          </div>
        </div>
        <div className="carousel-photos pb-xs-3">
          <div className="carousel-track overflow-hidden">
            <ul className="carousel-inner display-flex-xs animated block-grid-no-whitespace block-grid-xs-5 no-wrap">
              <img
                src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                alt="test"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
