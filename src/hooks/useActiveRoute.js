import { useLocation } from "react-router-dom";

export const useActiveRoute = () => {
  const location = useLocation();
  return location.pathname;
};
