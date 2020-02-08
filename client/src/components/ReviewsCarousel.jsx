import React from "react";
import CarouselPic from "./CarouselPic.jsx";

const ReviewsCarousel = ({
  scrollLeft,
  scrollRight,
  carouselStyle,
  sellerPics,
  sellerTitles
}) => {
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
              <button
                className="prev btn btn-icon btn-transparent"
                onClick={() => scrollLeft()}
              >
                {" "}
                &lt;{" "}
              </button>
              <button
                className="prev btn btn-icon btn-transparent"
                onClick={() => scrollRight()}
              >
                {" "}
                &gt;{" "}
              </button>
            </span>
          </div>
        </div>
        <div className="carousel-photos pb-xs-3">
          <div className="carousel-track overflow-hidden">
            <ul
              className="carousel-inner display-flex-xs animated block-grid-no-whitespace block-grid-xs-5 no-wrap"
              style={{ transform: carouselStyle }}
            >
              {sellerPics.map((url, index) => (
                <CarouselPic
                  key={index}
                  url={url}
                  title={sellerTitles[index]}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
