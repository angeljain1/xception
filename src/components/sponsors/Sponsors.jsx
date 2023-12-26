import React from "react";
import { motion } from 'framer-motion';

import Footer from "../footer/Footer";

import "./sponsors.css";

import si1 from "./assets/si1.png";
import si2 from "./assets/si2.jpeg";
import si3 from "./assets/si3.jpeg";
import si4 from "./assets/si4.jpeg";
import hotel from "./assets/hotel.jpeg";
import f1 from "./assets/f1.png";
import f2 from "./assets/f2.jpg";
import f3 from "./assets/f3.png";
import f4 from "./assets/f4.jpeg";
import f5 from "./assets/f5.jpeg";
import f6 from "./assets/f6.jpeg";
import bank from "./assets/bank.jpeg";
import tele from "./assets/tele.png";
import edu1 from "./assets/edu1.png";
import edu2 from "./assets/edu2.png";
import edu3 from "./assets/edu3.png";
import cos from "./assets/cos.png";
import mall from "./assets/mall.png";
import t1 from "./assets/t1.png";
import t2 from "./assets/t2.png";
import radio from "./assets/radio.jpeg";
import d from "./assets/d.png";

const Sponsors = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="sponsors-main-container"
        >
          <h2 className="sponsors-main-header">Our Sponsors</h2>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Social Initiative Partners</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={si1} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={si2} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={si3} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={si4} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Hospitality Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={hotel} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Food Partners</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={f1} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={f2} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={f3} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={f4} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={f5} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={f6} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Banking Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={bank} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Telecom Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={tele} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Education Partners</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={edu1} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={edu2} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={edu3} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Cosmetic Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={cos} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Mall Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={mall} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Travel Partners</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={t1} className="sponsors-image" />
              </div>
              <div className="sponsors-image-container">
                <img src={t2} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Radio Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={radio} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div className="sponsors-category-main-container">
            <h3 className="sponsors-category-name">Development Partner</h3>
            <div className="sponsors-category-inner-container">
              <div className="sponsors-image-container">
                <img src={d} className="sponsors-image" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "35px" }}></div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Sponsors;
