import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {
  const sliderRef = useRef(null); // reference to slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // optional
    arrows: false, // hide default arrows
    adaptiveHeight: true,
  };

  const slides = [
    { color: 'red', text: 'Slide 1' },
    { color: 'blue', text: 'Slide 2' },
    { color: 'green', text: 'Slide 3' },
    { color: 'orange', text: 'Slide 4' },
    { color: 'purple', text: 'Slide 5' },
    { color: 'pink', text: 'Slide 6' },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={{
              backgroundColor: slide.color,
              color: '#fff',
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              fontSize: '2rem',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}>
              {slide.text}
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom buttons */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => sliderRef.current.slickPrev()}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Prev
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
