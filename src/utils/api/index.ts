import axios from "axios";
import { getRefreshToken, removeAccessToken, setAccessToken } from "./tokens";

export const API_URL: string = process.env.NEXT_PUBLIC_API_URL ?? "";

export const API_SETTINGS = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const api = axios.create(API_SETTINGS);
export const registerApi = axios.create(API_SETTINGS);

function createAxiosResponseInterceptor() {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Reject promise if usual error
      if (error.response.status !== 401) {
        return await Promise.reject(error);
      }

      api.interceptors.response.eject(interceptor);

      return await api
        .post("/auth/token/refresh/", {
          refresh: getRefreshToken(),
        })
        .then(async (response) => {
          setAccessToken(response.data.access);
          error.response.config.headers.Authorization = "Bearer " + response.data.access;

          return await axios(error.response.config);
        })
        .catch(async (error2) => {
          // Retry failed, clean up and reject the promise
          removeAccessToken();
          return await Promise.reject(error2);
        })
        .finally(createAxiosResponseInterceptor); // Re-attach the interceptor by running the method
    },
  );
}

createAxiosResponseInterceptor(); // Execute the method once during start

export default api;
