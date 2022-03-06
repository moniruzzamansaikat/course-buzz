import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { loginUser } from '../adapter/authAdapter';
import Form from '../components/Form/Form';
import { useAuth } from '../hooks/auth/useAuth';
import { useLocalStorage } from '../hooks/useLocalstorage';

function SignIn(props) {
  const { user, setUser, setFormSubmitting } = useAuth();
  const [token, setToken] = useLocalStorage('token', '');
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const { t } = useTranslation();

  const handleSubmit = (data) => {
    loginUser(data)
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
  if (user) {
    return <Navigate to={from} />;
  }

  // inputs
  const inputs = [
    {
      label: t('signIn.email.label'),
      type: 'email',
      name: 'email',
      placeholder: t('signIn.email.placeholder'),
    },
    {
      label: t('signIn.password.label'),
      name: 'password',
      type: 'password',
      placeholder: t('signIn.password.placeholder'),
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <h1>{t('signIn.title')}</h1>
        <Form inputs={inputs} handler={handleSubmit} />
        <p className="help-text">
          {t('utils.dontHaveAC')} <Link to="/sign-up">{t('signUp.title')}</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
