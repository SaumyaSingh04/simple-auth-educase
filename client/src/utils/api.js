import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://simple-auth-educase.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});



export default API;
