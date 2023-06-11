import axios from "axios";
import { useEffect, useState } from "react";

const SortedInstructor = () => {
  const [topInstructor, setTopInstructor] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/instructor/class-sort").then((res) => {
      console.log(res.data);
      setTopInstructor(res.data);
    });
  }, []);

  return (
    <div className="px-5 lg:px-28">
      <h1 className="text-4xl font-sans font-bold">Top Instructor</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {topInstructor?.map((item, index) => (
          <div
            key={index}
            className="card card-compact w-full h-full bg-base-100 border-2 border-[#570DF8]"
          >
            <figure className="my-5">
              <img
                src={item?.instructorImage}
                alt="instructor"
                className="w-1/2 h-28 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Email: {item?.instructorEmail}</h2>
              <div className="flex justify-between items-center">
                <p>Name : {item?.instructorName}</p>
                <p>Enroll : {item?.enrollSum}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">See Class</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedInstructor;
