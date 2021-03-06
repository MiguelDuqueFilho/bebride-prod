import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    corsOrigin: '*',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: process.env.API_URL
});

export default api;
