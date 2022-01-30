import React from 'react';
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
      label: 'Email',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <h1>Sign In</h1>
        <Form inputs={inputs} handler={handleSubmit} />
        <p className="help-text">
          Dont's have an account ? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
