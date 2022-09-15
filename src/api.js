import axios from "axios";

const instance = axios.create({
  baseURL: "https://redux-ecommerce-backend.vercel.app",
});

export default instance;
