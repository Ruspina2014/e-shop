import React from "react";
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';
import circle from '../assets/circles.png';
import hero from '../assets/heropage.png';

function HeroSection() {
    const navigate = useNavigate(); // Initialize useNavigate
    return (
        <div className="hero-section">
            <div className="text-container">
                <h1>Discover signature <span style={{ display: 'block' }}>style</span></h1>
                <h1>
                    <span className="line"></span>with <span style={{ color: '#CCA000', display: 'block' }}>AIESEC RUSPINA's</span> 
                    <span style={{ fontSize: "40px" }}> Exclusive products</span>
                </h1>
                <button className="yellow-button" onClick={() => navigate('/catalog')}>
                    Start Shopping <span className="arrow">↗</span>
                </button>
            </div>
            <div className="image-container">
                <img src={circle} alt="circles" className="circle" />
                <img className="photo" src={hero} alt="hero" />
            </div>
        </div>
    );
}

export default HeroSection;

