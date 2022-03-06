import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './WhyUs.css';

function WhyUs() {
  const { t } = useTranslation();

  return (
    <div className="why-us">
      <div className="container">
        <div className="row">
          <div className="col" data-aos="fade-right">
            <h1 className="section-title">{t('whyUs.title')}</h1>
            <p>{t('whyUs.body')}</p>
            <Link to={'/community'} className="btn btn-secondary">
              {t('whyUs.buttonText')}
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
