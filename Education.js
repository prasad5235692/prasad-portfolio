import React from "react";
import img1 from '../../assets/Education.jpg';
import img2 from '../../assets/Education1.jpg';
import img3 from '../../assets/Education2.jpg';
import "./Education.css";

const Education = () => {
   
  return (
    
    <section className="services1">
    <h2><span1 class="Education">EDU</span1>CATION</h2>
      <p>I have a strong academic background in [Computer Science], having completed my [BSC(Computer science)] from[Alagappa University During my studies], I gained hands-on experience in [coding knowledge and problem solving skills and web development skills]. My education has laid a solid foundation for my interest in [I have more knowledge of leraning full-stack development ],and I am passionate about applying my knowledge to solve real-world problems.</p>
    <div className="service1-list">
      <div className="service1-box">
        <div className="flip-card-inner">
    <div className="flip-card-front">
        <img src={img1} alt="Education 1" />
         <h3 className="edu-label">SCHOOL</h3>
         </div>
        <div className="flip-card-back">
      <p>your see about of School details, please click the image.</p>
      </div>
    </div>
      </div>
      <div className="service1-box">
         <div className="flip-card-inner">
    <div className="flip-card-front">
        <img src={img2} alt="Education 2"  />
         <h3 className="edu-label">COLOEGE</h3>
         </div>
       <div className="flip-card-back">
      <p>your see about of College details, please click the image.</p>
    </div>
    </div>
    
      </div>
      <div className="service1-box">
         <div className="flip-card-inner">
    <div className="flip-card-front">
        <img src={img3} alt="Education 3" />
         <h3 className="edu-label">TRAINING</h3>
         </div>
       <div className="flip-card-back">
      <p>your see about of Traning details, please click the image.</p>
      
    </div>
    </div>
    
       </div>
      </div>
    </section>
  );
}

export default Education;
