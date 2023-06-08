import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Photography School |Admin Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2>Welcome Admin {user?.displayName}</h2>
    </div>
  );
};

export default AdminHome;
