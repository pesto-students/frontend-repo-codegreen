// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://greengrow-backend.onrender.com/',
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized access - redirecting to login');
      // You can add logic to redirect to login page if necessary
    }
    return Promise.reject(error);
  }
);

export default api;
