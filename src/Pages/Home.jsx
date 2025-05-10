import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Navbar from '../components/Navbar';
import '../Styles/Home.css'

const Home = () => {
    return <>
    <div style={{backgroundColor:'#e5e5e5'}}>
        <Navbar/>
      <Hero title={"Welcome to ZeeCare Institute | Your trusted Healthcare provider"} imageUrl={"/hero.png"}/>
      <Biography imageUrl={"/about.png"}/>
      <Departments/>
     

</div>
   </>
    
}

export default Home