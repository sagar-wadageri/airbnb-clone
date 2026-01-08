import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={images[current]}
        alt="property"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      {length > 1 && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              fontSize: "25px",
              cursor: "pointer",
              borderRadius: "50%",
              padding: "5px 10px",
            }}
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              fontSize: "25px",
              cursor: "pointer",
              borderRadius: "50%",
              padding: "5px 10px",
            }}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
