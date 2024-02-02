// HeroImage.js
import React from 'react';

const HeroImage = () => {

  const background = require('./bg.avif')

  return (
    <div className="content flex-grow p-6 md:p-12 lg:p-16 xl:p-20 flex justify-center items-center">
      <img
        src={background}
        alt="Fashion model with braided hair in a studio, dark-colored knitwear, close-up side profile view"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default HeroImage;
