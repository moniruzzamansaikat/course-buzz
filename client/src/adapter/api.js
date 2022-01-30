import Axios from 'axios';

const env = 'development';

export const api = Axios.create({
  baseURL: env === 'development' ? 'http://localhost:5000/api' : 'https://course-buzz.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
