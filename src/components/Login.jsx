import React, { useContext, useState } from 'react'
// import { Context } from '../main';
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";

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
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  // if (isAuthenticated) {
  //   return <Navigate to={"/"} />;
  // }



  return(
  <>

  <Sidebar/>
<div className="container form-component">
  <img src="/logo.png" alt="logo" className="logo" />
  <h1 className="form-title">WELCOME TO ZEECARE</h1>
  <p>Only Admins are Allowed To Access These Resources</p>
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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button type="submit">Login</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;