import Axios from 'axios';

const env = 'production';

export const api = Axios.create({
  baseURL: env === 'deveopment' ? 'http://localhost:5000/api' : 'https://course-buzz.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
