import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import './LanguagePicker.css';

function LanguagePicker() {
  const [lang, setLang] = useState('bn');
  const { i18n } = useTranslation();
  const options = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Bengali',
      value: 'bn',
    },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.value);
    setLang(lang.value);
  };

  return <Select options={options} onChange={changeLanguage} />;
}

export default LanguagePicker;
