import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderImages = [
  '../../assets/images/slider-1.jpg.webp',
  '../../assets/images/slider-2.jpg.webp',
  '../../assets/images/slider-3.jpg.webp',
  '../../assets/images/slider-4.jpg.webp',
  '../../assets/images/slider-5.jpg.webp',
  '../../assets/images/slider-6.jpg.webp',
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider className="z-10 mb-32 w-full" {...settings}>
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-1.jpg" alt="Slide 1" />
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-2.jpg" alt="Slide 2" />
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-3.jpg" alt="Slide 3" />
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-4.jpg" alt="Slide 4" />
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-5.jpg" alt="Slide 5" />
        <img src="https://preview.colorlib.com/theme/hepta/images/slider-6.jpg" alt="Slide 6" />
      </Slider>
    </>
  );
}
