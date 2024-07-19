import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const RedirectIfLoggedIn = ({ children }) => {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
