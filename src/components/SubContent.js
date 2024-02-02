// SubContent.js
import React from 'react';

const SubContent = () => {

  const story = require('./story.jpg');
  const services = require('./bg.avif');
  const prod = require('./prod2.webp');


  return (
    <div className="sub-content py-12 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-center mx-4 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
          <img
            src={story}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
          <p className="text-gray-600">
            test1 was founded with a simple goal in mind: to provide high-quality
            beauty services to our clients in a welcoming and relaxing environment.
            Since our founding, we have built a loyal following of clients who trust
            us to help them look and feel their best.
          </p>
        </div>
        <div className="text-center mx-4 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h3>
          <img
            src={services}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
          <p className="text-gray-600">
            test1 was founded with a simple goal in mind: to provide high-quality
            beauty services to our clients in a welcoming and relaxing environment.
            Since our founding, we have built a loyal following of clients who trust
            us to help them look and feel their best.
          </p>
        </div>
        <div className="text-center mx-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h3>
          <img
            src={prod}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
          <p className="text-gray-600">
            test1 was founded with a simple goal in mind: to provide high-quality
            beauty services to our clients in a welcoming and relaxing environment.
            Since our founding, we have built a loyal following of clients who trust
            us to help them look and feel their best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubContent;
