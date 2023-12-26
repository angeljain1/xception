import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import RegDetailsCard from "./RegDetailsCard.jsx";
import Footer from "../footer/Footer";

import regData from "./regData.js";

import "./register.css";

const Register = () => {

  return (
    <>
      <div className="register-main-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="reg-header">Register Here for Events!</h2>
          <div className="reg-cards-wrapper">
            <div className="event-details-cards-container">
              {regData.onlineEvents.events.map((data) => {
                return (
                  <RegDetailsCard
                    eventDetailsCardImg={data.url}
                    eventName={data.name}
                    eventDate={data.date}
                    eventLink={data.link}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Register;