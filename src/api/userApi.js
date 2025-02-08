import axios from "axios";
const API_URL = "http://localhost:5000/api";

export const getUsers = async () => (await axios.get(`${API_URL}/users`)).data;
export const getUserById = async (id) =>
  (await axios.get(`${API_URL}/users/${id}`)).data;
export const createUser = async (userData) =>
  (await axios.post(`${API_URL}/users`, userData)).data;
export const updateUser = async (id, userData) =>
  (await axios.put(`${API_URL}/users/${id}`, userData)).data;
export const deleteUser = async (id) =>
  await axios.delete(`${API_URL}/users/${id}`);
