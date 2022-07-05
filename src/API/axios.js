import axios from "axios";
import queryString from "query-string";
import apiConfig from "./reguests";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.APIKEY }),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { axiosClient, instance };
