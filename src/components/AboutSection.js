import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="discription">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
            <h2>ture.</h2>
          </div>
          <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</p>
        </div>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camira" />
      </div>
    </div>
  )
}

export default AboutSection;