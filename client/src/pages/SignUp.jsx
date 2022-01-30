import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { registerUser } from '../adapter/authAdapter';
import Form from '../components/Form/Form';
import { useAuth } from '../hooks/auth/useAuth';
import { useLocalStorage } from '../hooks/useLocalstorage';

function SignUp() {
  const [token, setToken] = useLocalStorage('token', '');
  const { user, setUser, setFormSubmitting } = useAuth();
  const location = useLocation();

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
      label: 'Name',
      type: 'text',
      name: 'name',
    },
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
        <h1>Sign Up</h1>
        <Form inputs={inputs} handler={handleSubmit} />
        <p className="help-text">
          Dont's have an account ? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
