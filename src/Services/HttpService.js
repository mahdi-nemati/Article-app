import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
