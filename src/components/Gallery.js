// Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Beauty Beyond The Surface: A Gallery of Our Salon's Creativity and Artistry
      </h2>
      {/* Carousel Container */}
      <div className="relative max-w-screen-lg mx-auto">
        <img
          src="https://placehold.co/1200x500"
          alt="Salon interior with orange chairs and modern design"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {/* Left Arrow Button */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <i className="fas fa-chevron-left text-gray-600" />
        </button>
        {/* Right Arrow Button */}
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <i className="fas fa-chevron-right text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
