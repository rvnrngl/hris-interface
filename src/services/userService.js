import api from "./index";
import { logError } from "./errorHandler";

export const getUserProfile = async (email) => {
  try {
    const response = await api.get(`/Users?email=${email}`);
    return response.data;
  } catch (error) {
    return logError(error, getUserProfile.name);
  }
};

export const saveUserProfile = async (dto) => {
  try {
    const response = await api.post("Users/profile/update", dto);
    return {
      isSuccess: true,
      message: "Profile updated successfully!",
      data: response.data,
    };
  } catch (error) {
    return logError(error, saveUserProfile.name);
  }
};
