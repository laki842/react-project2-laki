import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import './Home.css';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home-hero-section'>
          <HeroSection />
        </div>
        <div className='home-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
