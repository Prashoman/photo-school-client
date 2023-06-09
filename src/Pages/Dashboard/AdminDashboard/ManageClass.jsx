import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allClass = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      //console.log(res.data);
      return res.data;
    },
  });

  const handleStatusApprove = (item) => {
    console.log("Approve", item._id);
  };

  const handleStatusDeny = (item) => {
    console.log("Denny", item._id);
  };
  return (
    <div className="w-full h-full px-8">
      <div className="text-center">
        <h1>All the classes added by the Instructor</h1>
        <h2>Total Classes : {allClass.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xl">
            {/* head */}
            <thead>
              <tr>
                <th>SI</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allClass?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={item.classImage} alt="" />
                  </td>
                  <td>{item.className}</td>
                  <td>{item.instructorName}</td>
                  <td>{item.instructorEmail}</td>
                  <td>{item.seats}</td>
                  <td>{item.price}</td>
                  <td>
                    <p className="badge badge-primary">{item.status}</p>
                  </td>
                  <td className="flex gap-1">
                    <button
                      onClick={() => handleStatusApprove(item)}
                      className="btn btn-sm btn-success"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusDeny(item)}
                      className="btn btn-sm btn-success"
                    >
                      Deny
                    </button>
                    <Link to={`/dashboard/feedback/${item._id}`}>
                      <button className="btn btn-sm btn-success">
                        Feedback
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
