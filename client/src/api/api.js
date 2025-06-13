import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://jamoveo-production-46cf.up.railway.app/api",
});
export default api;
