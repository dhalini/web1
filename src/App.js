import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelector('.welcome-content').classList.add('fade-in');
  }, []);

  return (
    <div className="app-container">
      <div className="animated-bg"></div>
      <div className="welcome-content">
        <div className="logo-container">
          <div className="sacred-symbol">॥</div>
        </div>
        <h1>Welcome to</h1>
        <h2 className="company-name">Maha Naga Kali LLC</h2>
        <div className="decorative-line"></div>
        <p className="tagline">Embracing Innovation & Professional Excellence</p>
        
        <div className="announcement-banner">
          <div className="sparkle-icon">✧</div>
          <p>An extraordinary product is launching soon!...</p>
          <div className="sparkle-icon">✧</div>
        </div>


        <div className="contact-info">
          <p>Connect with us</p>
          <a href="mailto:info@mnkllc.org" className="email-link">
            info@mnkllc.org
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
