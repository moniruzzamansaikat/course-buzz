import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { registerUser } from '../adapter/authAdapter';
import Form from '../components/Form/Form';
import { useAuth } from '../hooks/auth/useAuth';
import { useLocalStorage } from '../hooks/useLocalstorage';

function SignUp() {
  const [token, setToken] = useLocalStorage('token', '');
  const { user, setUser, setFormSubmitting } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  const handleSubmit = (data) => {
    registerUser(data)
      .then((data) => {
        if (data) {
          const { user, token } = data;
          setUser(user);
          setToken(token);
          setFormSubmitting(false);
        }
      })
      .catch(() => {
        setFormSubmitting(false);
      });
  };

  // if user is logged in, redirect to home page
  const { from } = location.state || { from: { pathname: '/' } };
  if (user) {
    return <Navigate to={from} />;
  }

  const inputs = [
    {
      label: t('signUp.name.label'),
      type: 'text',
      name: 'name',
      placeholder: t('signUp.name.placeholder'),
    },
    {
      label: t('signUp.email.label'),
      type: 'email',
      name: 'email',
      placeholder: t('signUp.email.placeholder'),
    },
    {
      label: t('signUp.password.label'),
      name: 'password',
      type: 'password',
      placeholder: t('signUp.password.placeholder'),
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <h1>{t('signUp.title')}</h1>
        <Form inputs={inputs} handler={handleSubmit} />
        <p className="help-text">
          {t('utils.alreadyHaveAC')}{' '}
          <Link to="/sign-in">{t('signIn.title')}</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
