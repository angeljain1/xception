import React from "react";
import {Link} from "react-router-dom";

import footLogo from "../home/assets/mainLogo.png";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div style={{backgroundColor: "#0f0f0f"}}>
        <div className="home-footer-container-foot">
          <div className="footer-logo-social-container">
            <img src={footLogo} className="footer-logo-png" />
            <div className='footer-social-container'>
              <a target="_blank" href="https://instagram.com/xception_uec"><i class="fa-brands fa-brands-mod fa-instagram"></i></a>
              <a target="_blank" href="https://m.facebook.com/100070005852703/"><i class="fa-brands fa-brands-mod fa-square-facebook"></i></a>
              <a target="_blank" href="https://mobile.twitter.com/xception0"><i class="fa-brands fa-brands-mod fa-square-twitter"></i></a>
              <a target="_blank" href="https://youtube.com/@xceptioncse8136"><i class="fa-brands fa-brands-mod fa-youtube"></i></a>
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
            <a target="_blank" href="https://wa.me/9893510414" className="remUnder"><div className="footer-link"><i class="fa-solid fa-phone" style={{margin: "0px 5px 0px 0px"}}></i> Priyanshu Jangid</div></a>
            <a target="_blank" href="https://wa.me/7024911322" className="remUnder"><div className="footer-link"><i class="fa-solid fa-phone" style={{margin: "0px 5px 0px 0px"}}></i> Yogesh Patel</div></a>
          </div>
          <div className="footer-inner-per-block-address">
            <h3 className="footer-links-header">Get Directions</h3>
            <a target="_blank" href="https://goo.gl/maps/ZjuwkLDxfJ4u7MSF8" className="footer-address-link remUnder">4QWV+6F4, Ujjain - Indore Rd, Vasant Vihar, Ujjain, Madhya Pradesh 456010</a>
          </div>
        </div>
        <hr className="footer-divider-foot" />
        <div className="credits-foot">Developed with ❤️ by Angel Jain & Nagendra Chouhan</div>
      </div>
    </>
  );
}

export default Footer;
