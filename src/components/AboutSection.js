import React from 'react';
import home1 from '../img/home1.png';
// Style
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';
const AboutSection = () => {
  return (
    <About className="about">
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
            <h2>ture.</h2>
          </Hide>
          <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</p>
        </div>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camira" />
      </Image>
    </About>
  )
}

// Style Component
export default AboutSection;