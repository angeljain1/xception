import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import navLogo from "./assets/navlogo.svg";
import navCassette from "./assets/cassette.svg";

import "./navbar.css";

const Navbar = (props) => {
  const handleVideoSound = () => {
    props.toggleSound();
  }

  const handleNavBarMobMenuToggle = () => {
    $("#mobile-menu-triangle").fadeToggle();
    $("#navbar-menu-mobile").fadeToggle();


    setTimeout(() => {
      let closingNav;
      document.addEventListener('click', closingNav = (e) => {
        if (e.target.matches('#navbar-menu-mobile *')) return;

        handleMobMenuCloseAuto();

        document.removeEventListener('click', closingNav);
      }, 100);
    })

  }

  const handleMobMenuCloseAuto = () => {
    $("#mobile-menu-triangle").fadeOut();
    $("#navbar-menu-mobile").fadeOut();
  }

  return (
    <>
      <div className="navbar-main">
        <div className="navbar-inner-content-wrapper">
          <Link to="/" className="navbar-logo-container remUnder">
            <img src={navLogo} className="navbar-logo" />
          </Link>
          <div className="navbar-links-container">
            <img src={navCassette} className="navbar-cassette" onClick={handleVideoSound} />
            <Link to="/dev-a-thon" className="navbar-link remUnder">
              Dev-a-thon
            </Link>
            <Link to="/events" className="navbar-link remUnder">
              Events
            </Link>
            <Link to="/merchandise" className="navbar-link remUnder">
              Merchandise
            </Link>
            <Link to="/gallery" className="navbar-link remUnder">
              Gallery
            </Link>
            <Link to="/team" className="navbar-link remUnder">
              Team
            </Link>
            <Link to="/sponsors" className="navbar-link remUnder">
              Sponsors
            </Link>
            <a target="_blank" href="https://wa.me/9893510414" className="navbar-link remUnder">
              Contact Us
            </a>
          </div>
          <div className="navbar-hamburger">
            <img src={navCassette} className="navbar-cassette" onClick={handleVideoSound} />
            <i className="fa-solid fa-bars" onClick={handleNavBarMobMenuToggle}></i>
            <div className="navbar-mob-menu">
              <div id="mobile-menu-triangle" className="mob-menu-triangle"></div>
              <div id="navbar-menu-mobile" className="navbar-mob-menu-links-container">
                <Link to="/dev-a-thon" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i class="fa-regular fa-id-card"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Dev-a-thon
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="/events" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-regular fa-calendar"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Events
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="/merchandise" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-solid fa-shirt"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Merchandise
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="/gallery" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-regular fa-image"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Gallery
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="/team" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-solid fa-people-group"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Team
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="/sponsors" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-regular fa-copyright"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Sponsors
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
                <Link to="https://wa.me/9893510414" className="navbar-mob-menu-link remUnder" onClick={handleMobMenuCloseAuto}>
                  <div className="navbar-mob-menu-icon-container">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="navbar-mob-menu-link-name">
                    Contact Us
                    <div className="navbar-mob-menu-divider"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
