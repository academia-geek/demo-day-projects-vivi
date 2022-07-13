import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};
