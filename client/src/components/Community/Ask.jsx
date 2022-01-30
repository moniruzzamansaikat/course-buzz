import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { askNewQuestion } from '../../adapter/discussAdapter';
import { useAuth } from '../../hooks/auth/useAuth';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import Form from '../Form/Form';

function Ask() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setFormSubmitting } = useAuth();
  const [token] = useLocalStorage('token', '');
  const [category] = useState(() => searchParams.get('key'));

  const handler = (data) => {
    askNewQuestion(token, data)
      .then((data) => {
        console.log(data);
        setFormSubmitting(false);
      })
      .catch((error) => {
        setFormSubmitting(false);
      });
  };

  const inputs = [
    {
      name: 'category',
      label: 'Category',
      value: category,
      disabled: true,
    },
    {
      name: 'text',
      label: 'Question',
    },
  ];

  return (
    <div className="ask">
      <h2>Ask a question</h2>
      <Form inputs={inputs} handler={handler} />
    </div>
  );
}

export default Ask;
