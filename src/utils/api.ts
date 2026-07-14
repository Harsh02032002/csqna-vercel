import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { encrypt, decrypt } from './crypto';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5003/v1';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 20000,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Encrypt request body for POST/PUT/PATCH if it is JSON data
  if (config.method !== 'get' && config.data && !(config.data instanceof FormData)) {
    try {
      const plainTextData = typeof config.data === 'object' ? JSON.stringify(config.data) : config.data;
      config.data = encrypt(plainTextData);
      config.headers['Content-Type'] = 'text/plain';
    } catch (err) {
      console.error('Request encryption failed:', err);
    }
  }

  // Request response as text so we can manually decrypt it
  config.responseType = 'text';
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Decrypt response if it is encrypted text string
    if (response.data && typeof response.data === 'string') {
      try {
        const decryptedData = decrypt(response.data);
        try {
          response.data = JSON.parse(decryptedData);
        } catch {
          response.data = decryptedData; // Fallback to raw string
        }
      } catch (err) {
        // Not encrypted or decryption failed (e.g. static content)
        try {
          response.data = JSON.parse(response.data);
        } catch {
          // Keep as string
        }
      }
    }
    return response;
  },
  (error) => {
    if (error.response?.data && typeof error.response.data === 'string') {
      try {
        const decryptedError = decrypt(error.response.data);
        try {
          error.response.data = JSON.parse(decryptedError);
        } catch {
          error.response.data = decryptedError;
        }
      } catch {
        // Fallback
      }
    }

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
