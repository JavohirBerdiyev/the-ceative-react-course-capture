import React from 'react';
import home1 from '../img/home1.png';
// Style
import styled from 'styled-components';

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: wheat;
`

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`
export default AboutSection;