import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './MyCarousel.css'; // Import custom CSS for Carousel

const MyCarousel = () => {

  const img1 = require('./hair2.avif')
  const img2 = require('./eyeliner.jpg')
  const img3 = require('./nails.webp')


  return (
    <div className='bg-gray-200'>          
    <h2 className="text-3xl font-bold mb-4 text-center mt-4 ">Carousel</h2>
    <Carousel className="custom-carousel p-6    ">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src = {img2} // Replace '...' with the path to your image
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img1} // Replace '...' with the path to your image
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img3}// Replace '...' with the path to your image
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel></div>
  );
};

export default MyCarousel;
