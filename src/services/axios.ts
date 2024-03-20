import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ambrosiosocial-api.onrender.com/'
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
