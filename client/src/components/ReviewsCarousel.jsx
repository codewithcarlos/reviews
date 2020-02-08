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
              {/* <div className="block-grid-item">
                <button className="unstyled-button">
                  <img
                    src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                    alt="test"
                  />
                </button>
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div>
              <div className="block-grid-item">
                <img
                  src="https://i.etsystatic.com/iap/16f454/2156707950/iap_300x300.2156707950_2kqiuggg.jpg?version=0"
                  alt="test"
                />
              </div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
