import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3002'
})

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
  
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});
