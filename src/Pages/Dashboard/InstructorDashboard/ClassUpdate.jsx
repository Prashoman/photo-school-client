import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostKey = import.meta.env.VITE_hosted_key;
// console.log(imgHostKey);
const ClassUpdate = () => {
  const [axiosSecure] = useAxiosSecure();
  const [update, setUpdate] = useState(false);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const hostUrl = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
  //console.log(hostUrl);

  useEffect(() => {
    fetch(`http://localhost:5000/class/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(false);
        setItem(data);
      });
  }, [id, update]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const seats = form.seats.value;
    const price = form.price.value;
    console.log(classImage);

    const formData = new FormData();
    formData.append("image", classImage);
    console.log(formData);
    fetch(hostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    const classInfo = {
      className,
      price,
      seats,
    };
    axiosSecure.patch(`/class/${id}`, classInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        setUpdate(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // console.log(id);
  return (
    <div className="w-full h-full px-5">
      <div className="my-10">
        <div className="flex justify-between items-center">
          <h1>Update Item</h1>
          <Link to="/dashboard/my-class">
            <button className="btn btn-success">Back</button>
          </Link>
        </div>
        <form onSubmit={handleUpdate} className="p-5 space-y-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Class Name :</span>
            </label>
            <input
              name="className"
              defaultValue={item?.className}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Image :</span>
            </label>
            <img className="w-24 h-16 my-3" src={item?.classImage} alt="" />
            <input
              name="classImage"
              defaultValue={item?.classImage}
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="flex gap-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">seats</span>
              </label>
              <input
                name="seats"
                defaultValue={item?.seats}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                defaultValue={item?.price}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <input type="submit" className="btn btn-success" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassUpdate;
