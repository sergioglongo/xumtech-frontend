import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error('La variable de entorno VITE_API_URL no está definida.');
}

export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});