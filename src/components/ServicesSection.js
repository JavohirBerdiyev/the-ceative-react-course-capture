import React from 'react';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import homeImg2 from '../img/home2.png';

import { About, Description, Image } from '../styles';
import styled from 'styled-components';

const ServeresSection = () => {
  return (
    <Services>
      <Description>
        <h2>High <span>quality</span> services </h2>
        <Cards>
          <Cars>
            <div className="icon">
              <img src={clock} alt="cards" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cars>
          <Cars>
            <div className="icon">
              <img src={teamwork} alt="cards" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cars>
          <Cars>
            <div className="icon">
              <img src={diaphragm} alt="cards" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cars>
          <Cars>
            <div className="icon">
              <img src={money} alt="cards" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cars>
        </Cards>
      </Description>
      <Image>
        <img src={homeImg2} alt="/" />
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    weight: 70%;
    padding: 2rem 0 4rem 0;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cars = styled.div`
  flex-basis: 17rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`

export default ServeresSection;