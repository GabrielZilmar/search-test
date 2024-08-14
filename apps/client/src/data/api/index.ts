import axios from "axios";
import { enqueueSnackbar } from "notistack";
import env from "~/shared/env";

const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK") {
      enqueueSnackbar("Network error, check your connection", {
        variant: "error",
      });
      return new Promise(() => {});
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
