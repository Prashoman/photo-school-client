import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://photgraphy-school-server.vercel.app/sliders")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  // console.log(data);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-screen"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="w-3/4 lg:w-1/2">
                  <h1 className="mb-5 text-5xl font-bold">{item.title}</h1>
                  <p className="mb-5">{item.description}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
