import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header" style={{backgroundImage: `url(/img/hero-bg.png)`}}>
      <div className="container">
        <h1><span>Learn</span> everything for free</h1>
        <h3>
          <small>on </small>
          <strong>CourseBuzz</strong>
        </h3>
        <Link to="/courses" className="btn">
          Explore Courses
        </Link>
      </div>
    </header>
  );
}

export default Header;
