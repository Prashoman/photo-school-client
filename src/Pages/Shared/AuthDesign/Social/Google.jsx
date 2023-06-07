import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User Login Successfully.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogle} className="btn btn-secondary">
        <FaGoogle className="text-blue-700"></FaGoogle> Google
      </button>
    </div>
  );
};

export default Google;
