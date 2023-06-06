import { Link } from "react-router-dom";
import "../Login/Login.css";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useState } from "react";
import Google from "../Social/Google";

const Register = () => {
  const [show, setShow] = useState(false);
  const [cshow, setCshow] = useState(false);
  return (
    <div>
      <div className="hero min-h-screen px-28 loginImg">
        <div className="hero-content flex lg:flex shadow-xl border-2 border-base-300 p-10">
          <div className="text-center w-1/2">
            <div className="w-full">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/71msSzh/Data-security-05.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="card w-full h-full shadow-2xl bg-base-100">
              <div className="text-center mt-5">
                <h1 className="text-3xl font-sans font-bold">
                  Please Register First
                </h1>
              </div>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type={`${show ? "text" : "password"}`}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className="absolute top-14 cursor-pointer right-5"
                  >
                    {show ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
                  </div>
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    name="cpassword"
                    type={`${cshow ? "text" : "password"}`}
                    placeholder="Confirm password"
                    className="input input-bordered"
                  />
                  <div
                    onClick={() => setCshow(!cshow)}
                    className="absolute top-14 cursor-pointer right-5"
                  >
                    {cshow ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photo"
                    type="url"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select name="gender" className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="phone number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    name="address"
                    className="textarea textarea-bordered h-24"
                    placeholder="address"
                  ></textarea>
                </div>

                <label htmlFor="">
                  <h1>
                    You have an already account?Please{" "}
                    <Link className="text-blue-400" to="/login">
                      Login
                    </Link>
                  </h1>
                </label>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="divider">OR</div>
                <div>
                  <Google></Google>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
