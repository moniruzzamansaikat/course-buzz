import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/Community.css';

function Community() {
  return (
    <div className="community-page ">
      <div className="container">
        <h1>CourseBuzz community.</h1>
        <p>
          Here, you can find discussions, share your knowledge, and connect with
          other students as well as ask for helps from community experts.
        </p>

        <Outlet />
      </div>
    </div>
  );
}

export default Community;
