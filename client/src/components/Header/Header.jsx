import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t } = useTranslation();

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(/img/hero-bg.png)` }}
    >
      <div className="container">
        <h1>{t('headerTitle')}</h1>
        <h3>{t('headerSlogan')}</h3>
        <Link to="/courses" className="btn">
          {t('headerButton')}
        </Link>
      </div>
    </header>
  );
}

export default Header;
