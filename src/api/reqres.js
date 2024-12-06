import axios from 'axios';

// Use the environment variable for the base URL
const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

// API Endpoints
export const login = (data) => API.post('/login', data);
export const fetchUsers = (page) => API.get(`/users?page=${page}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
