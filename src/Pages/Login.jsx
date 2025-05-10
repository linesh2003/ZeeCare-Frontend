import React, { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
// import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import '../Styles/Home.css'

const Login = () => {
  // const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "http://localhost:4000/api/v1/user/patient/login",
      //   { email, password, confirmpassword, role: "Patient" },
      //   {
      //     withCredentials: true,
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      // toast.success(response.data.message);
      // setIsAuthenticated(true);
      navigateTo("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  // if (isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
    <div style={{backgroundColor:'#e5e5e5'}}>
        <Navbar/>
   
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#271776ca" }}
          >
            Register Now
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
    
            
          }}
        >
          <button type="submit" style={{cursor:"pointer"}}>Login</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
