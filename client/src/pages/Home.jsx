import React from 'react';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';
import WhyUs from '../components/WhyUs/WhyUs';

function Home() {
  return (
    <div>
      <Header />
      <Courses limit={5} />
      <WhyUs />
    </div>
  );
}

export default Home;
