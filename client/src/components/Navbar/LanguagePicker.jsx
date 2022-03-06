import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import './LanguagePicker.css';

function LanguagePicker() {
  const [lang, setLang] = useState('en');
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

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <Select options={options} onChange={({ value }) => setLang(value)} />;
}

export default LanguagePicker;
