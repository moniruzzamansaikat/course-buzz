import swal from 'sweetalert';
import { api } from './api';

// login user
export const loginUser = ({ email, password }) => {
  return api('/auth/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
    .then((res) => {
      window.location.reload();
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }
      throw error;
    });
};

// register user
export const registerUser = ({ name, email, password }) => {
  return api('/auth/register', {
    method: 'POST',
    data: {
      name,
      email,
      password,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }
      throw error;
    });
};

// check if user is logged in
export const isLoggedIn = (token) => {
  return api('/auth/status', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data.message, 'error');
      }
    });
};

// logout user
export const logoutUser = () => {
  localStorage.removeItem('token');
};
