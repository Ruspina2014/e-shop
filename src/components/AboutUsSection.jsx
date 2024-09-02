import React from "react";
import './AboutUsSection.css'
import Rus from '../assets/ruspinaLogo.png'



function AboutUsSection(){
    return (
        <div className="about-section">
        
      
        <div className="Logo">
            <img src={Rus} alt="Ruspina"/>
            <div className="logo-text"> <span style={{ color: '#CCA000' }}>AIESEC RUSPINA</span> , A local committee of AIESEC in Tunisia was founded in 2014 and covers the Monastir and Mahdia campuses</div>
        </div>
       
      
    </div>
        )
        }
         export default AboutUsSection