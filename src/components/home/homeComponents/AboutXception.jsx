import React from "react";

import boomBox from "../assets/boombox.svg";
import cassetteAnother from "../assets/cassetteAnother.svg";

import "./aboutXception.css";

const AboutXception = () => {
  return (
    <>
      <div className="about-xc-main-container">
        <div className="boomBox-container">
          <img src={boomBox} className="boomBox-svg floating-anime" />
        </div>
        <h2 className="about-xc-header">About Xception & Us</h2>
        <div className="about-xc-content">
          <p className="about-xc-para">Xception is The Socio-Technical Fest of Computer Science and
            Engineering Department of Ujjain Engineering College, Ujjain.
            Xception combines the zeal and desire of the students by focusing on technical events like organizing workshops, coding competitions, and the most fun events like Concert and DJ nights!</p>
          <br />
          <p className="about-xc-para">Apart from that, every year, a social theme is opted to which the whole event is dedicated. Xception 4.0 sets to promote social change and development in society by collaborating with different communities and NGOs.</p>
          <br />
          <p className="about-xc-para-bold"> This year Xception 4.0 is going to be better than ever as this will be a 3-day blast of various events from 7<sup style={{ fontSize: '0.6em' }}>th</sup> April - 9<sup style={{ fontSize: '0.6em' }}>th</sup> April 2023!</p>
        </div>
        <img src={cassetteAnother} className="cassetteAnother-svg floating-anime" />
      </div>
    </>
  );
}

export default AboutXception;
