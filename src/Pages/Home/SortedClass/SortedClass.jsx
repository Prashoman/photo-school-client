import axios from "axios";
import { useEffect, useState } from "react";
import useRole from "../../../Hooks/useRole";

const SortedClass = () => {
  const [popularClass, setPopularClass] = useState();
  const [userRole] = useRole();

  useEffect(() => {
    axios.get("http://localhost:5000/all-classes-sort").then((res) => {
      setPopularClass(res.data);
    });
  }, []);

  //console.log(popularClass);
  const handleSelectClass = (items) => {
    console.log("popular", items);
  };

  return (
    <div className="px-5 lg:px-28 my-8">
      <div className="text-center my-6">
        <h1 className="text-3xl font-sans font-bold">Top Popular Classes</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {popularClass?.map((item) => (
          <div
            key={item._id}
            className={`card w-full h-full ${
              item?.seats === 0 ? "bg-red-500" : "bg-base-100"
            }  px-5 py-4 shadow-xl`}
          >
            <figure className="px-5 pt-10">
              <img
                src={item?.classImage}
                alt="Shoes"
                className="w-full h-44 rounded-xl"
              />
            </figure>
            <div className="space-y-3">
              <h2 className="card-title mt-3">{item?.className}</h2>
              <div className="flex  justify-between items-center">
                <div className="avatar">
                  <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={item?.instructorImage} />
                  </div>
                </div>
                <h1 className="text-xl font-bold uppercase flex-1 ms-3">
                  {item?.instructorName}
                </h1>
                <p className="text-xl font-sans font-bold">
                  Enroll : {item?.enroll}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-xl">
                  Price :{" "}
                  <span className="text-orange-500 font-bold">
                    ${item?.price}
                  </span>
                </h1>
                <div>Available seats : {item?.seats}</div>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleSelectClass(item)}
                  disabled={
                    userRole?.instructor?.instructor ||
                    userRole?.admin?.admin ||
                    item?.seats === 0
                  }
                  className="btn btn-sm btn-primary"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedClass;
