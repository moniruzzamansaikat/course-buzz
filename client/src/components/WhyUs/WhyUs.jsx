import React from 'react';
import { Link } from 'react-router-dom';
import './WhyUs.css';

function WhyUs() {
  return (
    <div className="why-us">
      <div className="container">
        <div className="row">
          <div className="col" data-aos="fade-right">
            <h1 className='section-title'>Why you start from here ?</h1>
            <p>
              This is open sorce and free forever. You can contribute by adding
              best courses you have finded.{' '}
            </p>
            <Link to={'/community'} className="btn btn-secondary">
              Community
            </Link>
          </div>
          <div className="col" data-aos="fade-left">
            <img src="/img/features.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
