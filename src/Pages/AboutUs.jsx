import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";
import '../Styles/Home.css'

const AboutUs = () => {
  return (
    <>
    <div style={{backgroundColor:'#e5e5e5'}}>
    <Navbar/>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      </div>
    </>
  );
};

export default AboutUs;
