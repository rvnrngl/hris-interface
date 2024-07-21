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
