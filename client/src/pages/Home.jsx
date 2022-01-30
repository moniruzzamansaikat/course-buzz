import React from 'react';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';
import Sponsors from '../components/Sponsors/Sponsors';
import WhyUs from '../components/WhyUs/WhyUs';

function Home() {
  return (
    <div>
      <Header />
      <Courses limit={5} />
      <WhyUs />
      <Sponsors />
    </div>
  );
}

export default Home;
