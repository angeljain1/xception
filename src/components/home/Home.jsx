import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import $ from "jquery";

import AboutXception from "./homeComponents/AboutXception";
import Theme from "./homeComponents/Theme";
import Timer from "./homeComponents/Timer";

import videoBg from "./assets/home.mp4";
import logoMain from "./assets/mainLogo.png";

import "./home.css";

const Home = ({ setSound }) => {
  const [checkMute, setCheckMute] = useState(setSound);

  const checkSound = () => {
    if (setSound) {
      setCheckMute(false);
    } else {
      setCheckMute(true);
    }
  }

  useEffect(() => {
    checkSound();
    $("#overlay").fadeOut(1500).delay(2000);
  }, [setSound]);

  return (
    <>
      {/*Home Hero Section*/}
      <div id="overlay"></div>
      <div className="home-main-video-container">
        <video src={videoBg} autoPlay loop muted={checkMute} className="home-main-video" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="intro-content">
            <img src={logoMain} className="home-logo-main" />
            <div className="home-content-main-heading">Celebrating The Past, <br className="home-header-line-break" />7<sup style={{ fontSize: '0.6em' }}>th</sup> April - 9<sup style={{ fontSize: '0.6em' }}>th</sup> April 2023.</div>
            <Timer />
            <Link to="/events" className="neonBookmod">
              Register Now!
            </Link>
          </div>
        </motion.div>
      </div>

      {/*About Xception*/}
      <AboutXception />

      {/*Themes of Xception*/}
      <Theme />


    </>
  );
}

export default Home;
