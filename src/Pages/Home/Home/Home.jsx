import { useEffect } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Home = () => {
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    // fetch("http://localhost:5000/users", {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    axiosSecure.get("/users").then((res) => {
      console.log(res.data);
    });
  }, [axiosSecure]);
  return (
    <div>
      <Helmet>
        <title>Photography School | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
