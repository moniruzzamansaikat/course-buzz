import Axios from 'axios';

const env = 'development';

export const api = Axios.create({
  baseURL: env === 'development' ? 'http://localhost:5000/api' : '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
