import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        <div className="content">
        <h1>The site is under development</h1>
          <p>We are working on improvements. We apologize for any temporary inconvenience.</p>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
