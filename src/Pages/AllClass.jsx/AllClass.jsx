import { useLoaderData, useNavigate } from "react-router-dom";
import ClassCard from "../Shared/ClassCard/ClassCard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useSelectedClass from "../../Hooks/useSelectedClass";

const AllClass = () => {
  const data = useLoaderData();
  const [selectClass, refetch] = useSelectedClass();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  //console.log(selectClass);

  const handleSelectClass = (item) => {
    if (!user) {
      Swal.fire({
        title: "Please at first login",
        text: "You select the class at first login then select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      //console.log(item);

      const classAllReadySelected = selectClass.find(
        (selectItem) => selectItem.classId == item._id
      );
      //console.log(classAllReadySelected);

      if (classAllReadySelected) {
        return toast.warning("All ready selected the class !");
      }

      const cartInfo = {
        classId: item._id,
        className: item.className,
        classImage: item.classImage,
        userEmail: user?.email,
        price: item.price,
        created_at: new Date().getTime(),
      };

      axiosSecure.post("/cart/class", cartInfo).then((res) => {
        //console.log(res.data);
        if (res.data.insertedId) {
          refetch();
          toast.success("Select the class successfully!");
        }
      });
    }
  };

  return (
    <div className="my-9 px-24">
      <div className="mt-7">
        {" "}
        <h1>All Class</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <ClassCard
            handleSelectClass={handleSelectClass}
            key={item._id}
            items={item}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
