import { useLoaderData } from "react-router-dom";

const AllInstructor = () => {
  const instructors = useLoaderData();
  //console.log(instructors);

  return (
    <div>
      <h1>All Instructor</h1>

      <div className="grid grid-cols-3 gap-10">
        {instructors.map((item) => (
          <div
            key={item._id}
            className="card card-compact w-full h-full bg-base-100 shadow-xl"
          >
            <figure className="my-5">
              <img
                src={item?.image}
                alt="instructor"
                className="w-1/2 h-28 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Email: {item?.email}</h2>
              <p>Name : {item?.name}</p>
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

export default AllInstructor;
