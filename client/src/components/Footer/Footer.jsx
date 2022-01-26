import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-text">
          <h3>CourseBuzz</h3>
          <p>Free learning platform</p>
        </div>

        <div className="row">
          <div className="col">
            <ul>
              <li>
                <Link to={'/courses'}>Courses</Link>
              </li>
              <li>
                <Link to={'/sign-in'}>Sign In</Link>
              </li>
              <li>
                <Link to={'/sign-up'}>Sign Up</Link>
              </li>
              <li>
                <Link to={'/add-video'}>Contribute</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to={'/community'}>Community</Link>
              </li>
              <li>
                <Link to={'/blogs'}>Blog</Link>
              </li>
              <li>
                <Link to={'/support'}>Support</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/'}>Code of Contact</Link>
              </li>
              <li>
                <Link to={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/'}>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="bottom-text">
          Allright reserved by <strong>CoureBuzz</strong>
          {' | '}
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
