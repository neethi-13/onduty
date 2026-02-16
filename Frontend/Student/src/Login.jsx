import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/login", {
        mail: mail,
        password: password
      });

      const response = res.data;

      // 🔥 If backend sends error
      if (response.error) {
        setMessage(response.error);
        return;
      }

      // 🔥 Role-based login handling
      if (response.role === "student") {
        localStorage.setItem("student", JSON.stringify(response.data));
        navigate("/student");
      }
      else if (response.role === "staff") {
        localStorage.setItem("staff", JSON.stringify(response.data));
        navigate("/staff");
      }
      else if (response.role === "hod") {
        localStorage.setItem("hod", JSON.stringify(response.data));
        navigate("/hod");
      }
      else {
        setMessage("Invalid Credentials");
      }

    } catch (error) {
      setMessage("Server Error: " + error.message);
    }
  };

  return (
    <div className="LogContainer">

      {/* Navbar */}
      <nav className="LogNavbar">
        <h1 className="LogNavTitle">KSRCT</h1>
      </nav>

      {/* Login Card */}
      <div className="LogCard">
        <h2 className="LogTitle">Login Portal</h2>

        <form onSubmit={handleLogin} className="LogForm">

          <input
            type="email"
            placeholder="Enter Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="LogInput"
            required
          />

          <input
            type="password"
            placeholder="Enter DOB (dd-MM-yyyy)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="LogInput"
            required
          />

          <button type="submit" className="LogButton">
            Login
          </button>

        </form>

        <p className="LogMessage">{message}</p>
      </div>

    </div>
  );
}

export default Login;
