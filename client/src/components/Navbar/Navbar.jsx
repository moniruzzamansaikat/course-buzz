import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/useAuth';
import './Navbar.css';

function Navbar() {
  const { user, setUser } = useAuth();

  const handleLogoutButtonClick = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          Course<span>Buzz</span>
        </Link>
        <ul>
          {!user && (
            <li>
              <Link className="mobile" to="/sign-in">
                Sign In
              </Link>
            </li>
          )}

          {!user && (
            <li>
              <Link className="btn btn-primary mobile" to="/sign-up">
                Sign Up
              </Link>
            </li>
          )}

          {user && (
            <>
              <li>
                <Link className="btn btn-primary" to="/add-video">
                  <span className="text">Add Video</span>
                </Link>
                <Link className="icon" to="/add-video">
                  <img src="/img/add.svg" alt="" />
                </Link>
              </li>
              <li>
                <Link className="btn btn-primary" to="/profile">
                  <span className="text">Profile</span>
                </Link>
                <Link className="icon" to="/profile">
                  <img src="/img/profile.svg" alt="" />
                </Link>
              </li>
              <li className="logout" onClick={handleLogoutButtonClick}>
                <img src="/img/logout.svg" alt="" title="Logout" />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
