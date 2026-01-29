import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://medicobackend-drhi.onrender.com";

export default axios.create({
  baseURL: API_URL
});