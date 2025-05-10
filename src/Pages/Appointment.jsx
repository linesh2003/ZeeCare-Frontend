import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Navbar from "../components/Navbar";
import '../Styles/Home.css'

const Appointment = () => {
  return (
    <>
    <div style={{backgroundColor:'#e5e5e5'}}>
    <Navbar/>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
      </div>
    </>
  );
};

export default Appointment;
