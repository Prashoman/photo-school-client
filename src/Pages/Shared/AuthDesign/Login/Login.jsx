import { Link } from "react-router-dom";
import "./Login.css";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useState } from "react";
import Google from "../Social/Google";
import { Helmet } from "react-helmet";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Photography School | Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero min-h-screen px-28 loginImg">
        <div className="hero-content flex lg:flex shadow-xl border-2 border-base-300 p-10">
          <div className="text-center w-1/2">
            <div className="w-full">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/ngDFxtF/Wavy-Tech-28-Single-10.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="card w-full h-full shadow-2xl bg-base-100">
              <div className="text-center mt-5">
                <h1 className="text-3xl font-sans font-bold">Login please</h1>
              </div>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <label htmlFor="">
                  <h1>
                    You have an new?Please{" "}
                    <Link className="text-blue-400" to="/signup">
                      Register
                    </Link>
                  </h1>
                </label>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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

export default Login;
