import useAuth from "../../../Hooks/useAuth";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyAddedClass = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="w-full h-full px-5">
      <div>
        <h1 className="text-2xl font-bold">
          Total Added Class : {classes.length}
        </h1>
      </div>
      <div className="w-full h-full">
        <div className="overflow-x-auto">
          <table className="table table-xl table-pin-cols table-pin-rows">
            <thead>
              <tr>
                <th>#</th>
                <td>Name</td>
                <td>ClassImage</td>
                <td> Seats</td>
                <td>Price</td>
                <td>Enroll</td>
                <td>Status</td>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.className}</td>
                  <td>
                    <img src={item?.classImage} className="w-20 h-14" alt="" />
                  </td>
                  <td>{item.seats}</td>
                  <td>${item.price}</td>
                  <td>{item.enroll}</td>
                  <td>{item.status}</td>
                  <th>{item.feedback}</th>
                  <th className="flex gap-1">
                    <button>update</button>
                    <button>delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddedClass;
