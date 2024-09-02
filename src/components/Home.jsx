import React from 'react';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import Header from './sections/header';
import Guide from './sections/Guide';
import Guide2 from './sections/Guide2';
import Contact from './sections/Contact';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div id="aboutUs">
        <AboutUsSection />
      </div>
      <Header />
      <div  style={{ marginBottom: '150px' }}> {/* Adjust the value as needed */}
        <Guide />
      </div>
      <div id="guide">
        <Guide2 />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
    </div>
  );
}

export default Home;
