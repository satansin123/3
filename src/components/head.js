import React from 'react';

const HealthPartnerSection = ({ handleButtonClick}) => {

    const image = require('./bg.avif')



  return (
    <div className=" flex">
      {/* Left side with image */}

      {/* Right side with content */}
      <div className=" side w-1/2  text-white flex flex-col justify-between p-20">
        <div className="side flex justify-between items-center">
          {/* Content for the section */}
        </div>
        <div className=" mt-10">
          <h2 className="text-5xl font-bold mb-5">YOUR PARTNER IN HEALTH</h2>
          <p className="text-xl mb-10">Personalized care that puts you first</p>
          <button className="bg-transparent border border-white text-white py-2 px-10 hover:bg-white hover:text-black transition duration-300"
           onClick={() => handleButtonClick('cal')}>
            SCHEDULE A VISIT
          </button>
        </div>
        <div>
          {/* Additional content */}
        </div>
      </div>
      <div className="w-1/2">
        <img src={image} alt="Medical professional in a hospital setting" className="object-cover h-screen w-full" />
      </div>


    </div>
  );
};

export default HealthPartnerSection;
