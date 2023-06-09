import { BASE_URL } from "@/constants/constants";
import axios from "axios";

let token = "";

if (typeof window !== "undefined") {
  token = localStorage.getItem("ACCESS_TOKEN") ?? "";
}

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response.status === 401) {
      window.alert('Por favor, realize o login')
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
