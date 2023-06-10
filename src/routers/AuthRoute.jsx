import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default AuthRoute;
