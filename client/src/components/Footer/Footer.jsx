import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="top-text">
          <h3>CourseBuzz</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="row">
          <div className="col">
            <ul>
              <li>
                <Link to={'/courses'}>{t('footer.courses')}</Link>
              </li>
              <li>
                <Link to={'/sign-in'}>{t('footer.signIn')}</Link>
              </li>
              <li>
                <Link to={'/sign-up'}>{t('footer.signUp')}</Link>
              </li>
              <li>
                <Link to={'/add-video'}>{t('footer.contribute')}</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to={'/community'}>{t('footer.community')}</Link>
              </li>
              <li>
                <Link to={'/blogs'}>{t('footer.blog')}</Link>
              </li>
              <li>
                <Link to={'/support'}>{t('footer.support')}</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to={'/about'}>{t('footer.about')}</Link>
              </li>
              <li>
                <Link to={'/'}>{t('footer.privacy')}</Link>
              </li>
              <li>
                <Link to={'/'}>{t('footer.codeOfContact')}</Link>
              </li>
              <li>
                <Link to={'/'}>{t('footer.terms')}</Link>
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
