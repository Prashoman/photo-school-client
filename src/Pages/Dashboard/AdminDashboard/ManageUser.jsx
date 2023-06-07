import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="w-full h-full px-8">
      <div>Total User : {users.length}</div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>SI</th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="flex">
                    <button className="btn btn-sm btn-success">
                      Make Instructor
                    </button>
                    <button className="btn ms-2 btn-sm btn-primary">
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-info">deleted</button>
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

export default ManageUser;
