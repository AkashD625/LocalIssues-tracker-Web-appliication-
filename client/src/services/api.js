import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response;
};

export const signupUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data);
  return response;
};
