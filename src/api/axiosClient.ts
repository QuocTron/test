import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer token`,
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer token`;
    return config;
  },
  (error) => {
    throw error;
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  async (error) => {
    if (error.response.status >= 500) error.response.message = "System error";
    throw error;
  }
);

export default axiosClient;
