import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  return (
    <div className="w-full h-full px-4">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold font-sans">Add an Classes</h1>
      </div>
      <div className="px-5 border-2 shadow-xl py-10 rounded-lg space-y-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Class Name*:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Image*:</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Instructor Name*:</span>
            </label>
            <input
              readOnly
              defaultValue={user?.displayName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Instructor Email*:</span>
            </label>
            <input
              readOnly
              defaultValue={user?.email}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Available seats*:</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price*:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div>
          <input type="submit" className="btn btn-success" value="Add Class" />
        </div>
      </div>
    </div>
  );
};

export default AddClass;
