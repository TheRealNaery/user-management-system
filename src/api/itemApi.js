import axios from "axios";
const API_URL = "http://localhost:5000/api";

export const getItemsByUserId = async (userId) =>
  (await axios.get(`${API_URL}/items?user=${userId}`)).data;
