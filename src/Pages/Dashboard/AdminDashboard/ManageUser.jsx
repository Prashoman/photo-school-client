import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

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

  const handleMakeInstructor = (user) => {
    //console.log("asi");
    fetch(`http://localhost:5000/user/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.email} Now instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    console.log("asi");
    fetch(`http://localhost:5000/user/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.email} Now Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      disabled={user.role === "instructor"}
                      className="btn btn-sm btn-success"
                    >
                      Make Instructor
                    </button>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      disabled={user.role === "admin"}
                      className="btn ms-2 btn-sm btn-primary"
                    >
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
