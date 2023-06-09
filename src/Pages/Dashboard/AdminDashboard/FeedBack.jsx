import { Link } from "react-router-dom";

const FeedBack = () => {
  return (
    <div className="w-full h-full px-5">
      <div>
        <Link to="/dashboard/manage-class">
          <button className="btn btn-sm btn-success"> Back</button>
        </Link>
      </div>
      <form className="my-10 space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">FeedBack</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Feedback"
          ></textarea>
        </div>
        <div>
          <input className="btn btn-success" type="submit" value="feedback" />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
