import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  // First image url
  {
    url:
      'https://freight.cargo.site/w/350/i/2c5df92c6dc588b78786cd61df5d5b7e2ebad24160f2d1d264ad5ffc6f16e5d0/pixelcut_3-7.png',
  },
  {
    url:
      'https://freight.cargo.site/w/350/i/0dc9a261dc5810ad9e044b4cda7aa4341eab6edc5627da0d724a1dd1ce8d652e/pixelcut_1-2.png',
  },
  // Second image url
  {
    url:
      'https://freight.cargo.site/w/350/i/51ea30bbd12f3a35e5ad59683a4b00cc19a57cce3176c4309ec5c59a93f9faf0/bottega1.png',
  },
  // Third image url
  {
    url:
      'https://freight.cargo.site/w/350/i/254e9e12eed0616bbd26921cc4b937c7ba7cd7d9f725c075f6484182da598581/chrome-bracelet1.png',
  },

  // Fourth image url

  {
    url:
      'https://freight.cargo.site/w/500/i/3a7a9a98f28ce43bea4dea4bcbf25bc30b5b60f7919c9714e8af8dcdaf8269f1/issey1.png',
  },
];
function Slider() {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        showDots={false}
        infinite
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img src={imageUrl.url} alt="movie" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Slider;
