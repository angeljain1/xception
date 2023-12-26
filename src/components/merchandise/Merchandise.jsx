import React from "react";
import { motion } from 'framer-motion';

import Footer from "../footer/Footer";

import './merchandise.css';

import merch from './assets/merch.png';

const Merchandise = () => {
  return (
    <>
      <div className="merch-main-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="merch-header">Merchandise</h2>
          <div className="merch-image-container">
            <img src={merch} className="merch-img" />
          </div>
          <a href="https://forms.gle/1mt3jAW3jaDtJhsM7" className="neonBook">
            Order Now
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Merchandise;
