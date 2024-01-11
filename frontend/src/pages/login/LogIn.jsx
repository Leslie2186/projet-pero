import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import InputLogin from "../../components/inputlogin/InputLogin";
import "react-toastify/dist/ReactToastify.css";
import "./LogIn.css";

const user = {
  email: "",
  password: "",
};

const showToastMessage = () => {
  toast.success(
    "Vos informations de connexion sont correctes, vous allez être redirigé vers le dashboard!",
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};

const showToastErrorMessage = () => {
  toast.error("Vos informations de connexion ne sont pas correctes!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

function LogIn() {
  const [credentials, setCredentials] = useState(user);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        credentials
      );
      if (valid) {
        showToastMessage();
        setTimeout(() => {
          navigate("/dashboardVilles");
        }, 3000);
      } else {
        showToastErrorMessage();
      }
    } catch (error) {
      showToastErrorMessage(error);
      setCredentials(user);
    }
  };

  return (
    <div className="contain-login">
      <h1>Log In</h1>
      <div className="contain-form-login">
        <form onSubmit={handleRequest}>
          <InputLogin
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Votre Email"
          />
          <InputLogin
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Votre password"
          />
          <div>
            <button type="submit" className="button-log">
              Log In
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LogIn;
