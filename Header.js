import React from "react";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserGraduate,faLaptop,faHouse,faIdCardClip} from '@fortawesome/free-solid-svg-icons'
import icon3 from "../../assets/icon3.png"
import "./Header.css";

const Header = () => { 
  const navigate1 = useNavigate();
  const navigate2= useNavigate();

  return (
    <header className="header">
      <div className="logo"><span1>I</span1>T</div>
      <nav>
    <div className="nav-links">
      <div className="icon-tooltip">
      <span><FontAwesomeIcon icon={faHouse}/></span>
        <span className="tooltip-text">Home</span>
      </div>
      <div className="icon-tooltip" onClick={()=> navigate1('/Education')} style={{cursor:'pointer'}}>
         <span><FontAwesomeIcon icon={faUserGraduate} /></span>
        <span className="tooltip-text">Education</span>
      </div>
      <div className="icon-tooltip" onClick={()=> navigate2('/Skills')} style={{cursor:'pointer'}}>
        <span><img src={icon3} alt="icon3" className="nav-icon"/></span>
        <span className="tooltip-text">Skills</span>
      </div>
      <div className="icon-tooltip">
       <span><FontAwesomeIcon icon={faLaptop} /></span>
        <span className="tooltip-text">Projects</span>
      </div>
      <div className="icon-tooltip">
       <span><FontAwesomeIcon icon={faIdCardClip}/></span>
        <span className="tooltip-text">Contact</span>
      </div>
    </div>
    </nav>
    </header>
  
    
  );
};


export default Header;
