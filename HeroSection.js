import React from "react";
import Spline from "@splinetool/react-spline";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      {/* Fullscreen Spline */}
      <Spline
        scene="https://prod.spline.design/MW3Hw7vEb7MBos2c/scene.splinecode"
        className="spline-canvas"
      />

      {/* Text content overlay */}
      <div className="hero-overlay">
        <h1><span2 >PRASAD K</span2></h1>
        <h3>FOR WEBSITE AND WEB DEVELOPMENT</h3>
        <h1 className="h2">FULLSTACK'S PORTFOLIO</h1>
        <div className="tag-box1">
        <button className="tag1">SEE MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;




