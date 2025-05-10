import React from 'react'

const Hero = ({title, imageUrl}) => {
    return (
        <div className="hero container" style={{overflowY:"hidden"}}>
            <div className="banner">
                <h1>{title}</h1>
                <p style={{ textAlign: "justify" }}>
                    ZeeCare Institute is a state-of-the-art facility dedicated 
                    to providing comprehensive healthcare services with compassion and
                    expertise. Our team of professionals committed to delivering 
                    personalized care tailored to each patients needs. At PulseCare,
                    we prioritize your wellbeing, ensuring a harmonious journey
                    towards optimal health and wellness.
                </p>
           </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image"/>
            <span>
                <img src="/Vector.png" alt="vector" />         
            </span>
        </div>
        </div>
    );
};

export default Hero;