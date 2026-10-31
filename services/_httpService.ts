
import axios from "axios";
import config from "./config";
import { errorToast } from "@/utils/toastUtils";

const httpService = axios.create({
  baseURL: config.onlinePath,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
httpService.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message =
        error.response.data?.message ??
        `API Error: ${error.response.status}`;

      errorToast(message);
    } else if (error.request) {
      errorToast("No response received from server.");
    } else {
      errorToast(error.message ?? "Request failed.");
    }

    return Promise.reject(error);
  }
);

export default httpService;
