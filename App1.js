import React from "react";
import {Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Education from "./components1/Education";
import Skills from "./components1/Skills";
import "./App1.css";
function App() {
  return ( 
    <div className="app">
      <Header />
      <HeroSection />
      <Services/>
        <Routes>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      </Routes>  
    </div>

  );
}

export default App;
