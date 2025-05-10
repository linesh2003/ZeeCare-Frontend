import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Navbar from '../components/Navbar';

const Home = () => {
    return <>
        <Navbar/>
      <Hero title={"Welcome to ZeeCare Institute | Your trusted Healthcare provider"} imageUrl={"/hero.png"}/>
      <Biography imageUrl={"/about.png"}/>
      <Departments/>
     


   </>
    
}

export default Home