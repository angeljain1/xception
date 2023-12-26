import React from "react";
import { Link } from "react-router-dom";

import retroBolly from "../assets/retroBolly.jpg";
import empower from "../assets/empower.svg";
import footLogo from "../assets/mainLogo.png";

import "./theme.css";

const Theme = () => {

  return (
    <>
      <div className="theme-main-container">
        <h2 className="xc-theme-header" id="neon"><b><span>Themes</span></b></h2>
        <div className="xception-theme-desc-container">
          <div className="xception-theme-container">
            <p className="main-theme-header">Main Theme</p>
            <div className="theme-inner-wrapper-outer">
              <div className="theme-illustration-container">
                <img src={retroBolly} className="retro-bolly-jpg" />
              </div>
              <div>
                <p className="main-theme-header-inner">Xception goes RETRO!</p>
                <p className="xception-main-theme-content">The nostalgic escape to the good-ol'-days is finally here! Come join us as we take a trip back to the past to celebrate the evergreen Retro Bollywood.</p>
              </div>
            </div>
          </div>
          <div className="xception-theme-container">
            <p className="main-theme-header">Social Theme</p>
            <div className="theme-inner-wrapper-outer">
              <div className="theme-illustration-container">
                <img src={empower} className="retro-bolly-jpg" />
              </div>
              <div>
                <p className="main-theme-header-inner">"EmpowerAbility"</p>
                <p className="xception-main-theme-content">Our mission is to provide support and resources to individuals with disabilities to help them achieve a greater level of independence and self-determination.</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="home-footer-container">
          <div className="footer-logo-social-container">
            <img src={footLogo} className="footer-logo-png" />
            <div className='footer-social-container'>
              <a target="_blank" href="https://instagram.com/xception_uec"><i className="fa-brands fa-brands-mod fa-instagram"></i></a>
              <a target="_blank" href="https://m.facebook.com/100070005852703/"><i className="fa-brands fa-brands-mod fa-square-facebook"></i></a>
              <a target="_blank" href="https://mobile.twitter.com/xception0"><i className="fa-brands fa-brands-mod fa-square-twitter"></i></a>
              <a target="_blank" href="https://youtube.com/@xceptioncse8136"><i className="fa-brands fa-brands-mod fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-inner-per-block">
            <h3 className="footer-links-header">Useful Links</h3>
            <div className="footer-link"><Link to="/events" className="footer-link remUnder">Events</Link></div>
            <div className="footer-link"><Link to="/merchandise" className="footer-link remUnder">Merchandise</Link></div>
            <div className="footer-link"><Link to="/gallery" className="footer-link remUnder">Gallery</Link></div>
            <div className="footer-link"><Link to="/team" className="footer-link remUnder">Team</Link></div>
            <div className="footer-link"><Link to="/sponsors" className="footer-link remUnder">Sponsors</Link></div>
          </div>
          <div className="footer-inner-per-block">
            <h3 className="footer-links-header">Contact Us</h3>
            <a target="_blank" href="https://wa.me/9893510414" className="remUnder"><div className="footer-link"><i className="fa-solid fa-phone" style={{ margin: "0px 5px 0px 0px" }}></i> Priyanshu Jangid</div></a>
            <a target="_blank" href="https://wa.me/7024911322" className="remUnder"><div className="footer-link"><i className="fa-solid fa-phone" style={{ margin: "0px 5px 0px 0px" }}></i> Yogesh Patel</div></a>
          </div>
          <div className="footer-inner-per-block-address">
            <h3 className="footer-links-header">Get Directions</h3>
            <a target="_blank" href="https://goo.gl/maps/ZjuwkLDxfJ4u7MSF8" className="footer-address-link remUnder"><div className="footer-address-link">4QWV+6F4, Ujjain - Indore Rd, Vasant Vihar, Ujjain, Madhya Pradesh 456010</div></a>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="credits">Developed with ❤️ by Angel Jain & Nagendra Chouhan</div>
      </div>
    </>
  );
}

export default Theme;
