import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Photography School | instructor Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2>Welcome Instructor {user?.displayName}</h2>
    </div>
  );
};

export default InstructorHome;
