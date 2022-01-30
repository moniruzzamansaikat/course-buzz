import React, { useState } from 'react';
import './Sponsors.css';

function Sponsors() {
  const [images] = useState([
    '/img/sponsors/img1.png',
    '/img/sponsors/img2.png',
    '/img/sponsors/img3.png',
    '/img/sponsors/img4.png',
    '/img/sponsors/img5.png',
    '/img/sponsors/img6.png',
  ]);

  return (
    <div className="sponsors">
      <div className="container">
        <h2 className='section-title'>Our Sponsors</h2>
        <div className="images">
          {images.map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
