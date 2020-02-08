import React from "react";

const CarouselPic = ({ url, title }) => {
  return (
    <div className="block-grid-item">
      <button className="unstyled-button">
        <img src={url} alt={title} />
      </button>
    </div>
  );
};

export default CarouselPic;
