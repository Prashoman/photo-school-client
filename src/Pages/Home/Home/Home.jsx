import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Photography School | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Slider></Slider>
    </div>
  );
};

export default Home;
