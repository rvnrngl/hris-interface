import { logError } from "./errorHandler";
import api from "./index";
import { getUserProfile } from "./userService";

export const userLogin = async (dto) => {
  try {
    const response = await api.post("/auth/login", dto);

    if (!response.data.accessToken) {
      return { isSuccess: false, message: response.data };
    }

    const { accessToken, accessTokenExpiration, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessTokenExpiration", accessTokenExpiration);

    const user = await getUserProfile(dto.email);

    const result = { email: dto.email, ...user };

    return { isSuccess: true, result };
  } catch (error) {
    console.log(error);
    return logError(error, userLogin.name);
  }
};

export const createAccount = async (dto) => {
  try {
    const response = await api.post("/auth/register", dto);

    if (!response.data.isSuccess) {
      return { isSuccess: false, message: response.data };
    }

    return response.data;
  } catch (error) {
    return logError(error, createAccount.name);
  }
};
