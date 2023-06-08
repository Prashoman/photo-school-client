import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isLoading] = useRole();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && userRole?.student?.student) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default StudentRoute;