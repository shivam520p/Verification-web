import axios from "axios";
const baseURL = "https://identiplus-backend.onrender.com/api/v1";
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
