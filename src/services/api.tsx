import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/all4x/",
});

export default api;
