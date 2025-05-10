import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dasboard from "./components/Dasboard";
import Login from "./Pages/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
// import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  // const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
  //   useContext(Context);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/v1/user/admin/me",
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setIsAuthenticated(true);
  //       setAdmin(response.data.user);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       setAdmin({});
  //     }
  //   };
  //   fetchUser();
  // }, []); 

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dasboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctor/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
