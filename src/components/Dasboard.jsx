import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import Sidebar from "./Sidebar";
import '../Styles/Dashboard.css'

const Dasboard = () => {
  // const [appointments, setAppointments] = useState([]);

  // const { isAuthenticated, admin } = useContext(Context);


  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:4000/api/v1/appointment/getall",
  //         { withCredentials: true }
  //       );
  //       console.log("Fetched Appointments:", data); // Debug
  //       setAppointments(data.appointments || []);
  //     } catch (error) {
  //       setAppointments([]);
  //       console.error("Error fetching appointments:", error);
  //     }
  //   };

  //   fetchAppointments();
  // }, []);

  // const handleUpdateStatus = async (appointmentId, status) => {
  //   try {
  //     const { data } = await axios.put(
  //       `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
  //       { status },
  //       { withCredentials: true }
  //     );
  //     setAppointments((prev) =>
  //       prev.map((appointment) =>
  //         appointment._id === appointmentId
  //           ? { ...appointment, status }
  //           : appointment
  //       )
  //     );
  //     toast.success(data.message);
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed to update appointment"
  //     );
  //   }
  // };

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
    <Sidebar/>
    <section className="dashboard page" style={{background:'#3939d9f2;'}}>
      <div className="banner">
        <div className="firstBox">
          <img src="/doc.png" alt="Doctor" />
          <div className="content">
            <div>
              <p>Hello,</p>
              <h5>
                {/* {admin && `${admin.firstName} ${admin.lastName}`} */}
                Linesh
              </h5>
            </div>
            <p>
              Welcome to your admin dashboard. Manage appointments and doctors
              efficiently.
            </p>
          </div>
        </div>
        <div className="secondBox">
          <p>Total Appointments</p>
          {/* <h3>{appointments.length}</h3> */}
        </div>
        <div className="thirdBox">
          <p>Registered Doctors</p>
          <h3>10</h3>
        </div>
      </div>

      <div className="banner">
        <h5>Appointments</h5>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Status</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {/* {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                  <td>{appointment.appointment_date?.substring(0, 16)}</td>
                  <td>{`${appointment.doctor?.firstName || "N/A"} ${appointment.doctor?.lastName || ""}`}</td>
                  <td>{appointment.department}</td>
                  <td>
                    <select
                      className={
                        appointment.status === "Pending"
                          ? "value-pending"
                          : appointment.status === "Accepted"
                          ? "value-accepted"
                          : "value-rejected"
                      }
                      value={appointment.status}
                      onChange={(e) =>
                        handleUpdateStatus(appointment._id, e.target.value)
                      }
                    >
                      <option value="Pending" className="value-pending">
                        Pending
                      </option>
                      <option value="Accepted" className="value-accepted">
                        Accepted
                      </option>
                      <option value="Rejected" className="value-rejected">
                        Rejected
                      </option>
                    </select>
                  </td>
                  <td>
                    {appointment.hasVisited ? (
                      <GoCheckCircleFill className="green" />
                    ) : (
                      <AiFillCloseCircle className="red" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No Appointments Found!
                </td>
              </tr>
            )} */}
            {/* remove it later */}
            <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No Appointments Found!
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
};

export default Dasboard;
