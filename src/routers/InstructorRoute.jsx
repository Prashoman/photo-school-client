import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isLoading] = useRole();

  if (loading || isLoading) {
    return (
      <di>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </di>
    );
  }

  if (user && userRole?.instructor?.instructor) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default InstructorRoute;
