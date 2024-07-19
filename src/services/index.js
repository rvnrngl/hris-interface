import { default as axios } from "axios";
import { BASE_URL } from "../constants/config";
import { useAuthStore } from "../store/authStore";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getNewAccessToken = async () => {
  try {
    console.log("Trying to get new token...");
    const dto = {
      user: useAuthStore.getState().getUser(),
      expiredAccessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    };

    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, dto, {
      headers: { "Content-Type": "application/json" },
    });

    const {
      accessToken,
      accessTokenExpiration,
      refreshToken: newRefreshToken,
    } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    localStorage.setItem("accessTokenExpiration", accessTokenExpiration);

    return accessToken;
  } catch (error) {
    console.error("Refresh token error:", error);
    useAuthStore.getState().logOut();
    return null;
  }
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.url !== "/auth/login") {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    if (response && response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
      console.log("Access token is expired.");
      const newToken = await getNewAccessToken();
      if (newToken) {
        config.headers["Authorization"] = `Bearer ${token}`;
        console.log("Access token renewed.");
        return api(config);
      }
    }

    console.log("Not 401");
    return Promise.reject(error);
  },
);

export default api;
