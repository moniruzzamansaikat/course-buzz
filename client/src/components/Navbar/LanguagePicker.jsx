import React, { useState } from 'react';
import Select from 'react-select';
import './LanguagePicker.css';

function LanguagePicker() {
  const [lang, setLang] = useState('en');
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

  return <Select options={options} onChange={({ value }) => setLang(value)} />;
}

export default LanguagePicker;
