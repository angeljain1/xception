import React, { useEffect } from "react";
import $ from "jquery";

import DevathonProjects from "./DevathonProjects.jsx";
import Footer from "../footer/Footer";

import devathonDetails from "./devathonDetails.js";

import "./devathon.css";

const Devathon = () => {

  const toggleProjects = () => {
    $("#devathon-projects").slideToggle();
  }
  const toggleRules = () => {
    $("#devathon-rules").slideToggle();
  }
  const toggleInstructions = () => {
    $("#devathon-inst").slideToggle();
  }

  return (
    <>
      <div className="devat-main-container">
        <h2 className="devat-header">Dev-a-thon is live!</h2>
        <div className="devat-reg-container">
          <a href="https://forms.gle/Bx3oTctxWqMXdQMV6" className="devat-sub-header">Register Now<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>

        <div className="devathon-main-inner-container" onClick={toggleProjects}>
          <div className="devathon-section-container">
            <div className="projects-header-devathon">
              Projects
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div id='devathon-projects'>
            <hr className="devathon-divider" />
            {
              devathonDetails.projects.map((data, i) => {
                return (
                  <DevathonProjects
                    title={data.title}
                    desc={data.desc}
                    head={data.head}
                    contact={data.contact}
                    sno={i + 1}
                  />
                );
              })
            }
          </div>
        </div>
        <div className="devathon-main-inner-container" onClick={toggleRules}>
          <div className="devathon-section-container">
            <div className="projects-header-devathon">
              Rules
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div id='devathon-rules'>
            <hr className="devathon-divider" />
            <ol>
              {
                devathonDetails.rules.map(r => {
                  return (
                    <li dangerouslySetInnerHTML={{ __html: r }} />
                  );
                })
              }
            </ol>
          </div>
        </div>
        <div className="devathon-main-inner-container" onClick={toggleInstructions}>
          <div className="devathon-section-container">
            <div className="projects-header-devathon">
              Instructions
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="devathon-inst-container" id='devathon-inst'>
            <ol>
              <li>Use below given videos for the instruction regrading creating a new branch from the main branch and how to push your changes onto the newly created branch. <b>Do not push your changes onto the main branch.</b>
                <ul>
                  <li><a style={{ color: "#61b3ff" }} href="https://youtu.be/Lf3DYRvCPFo">https://youtu.be/Lf3DYRvCPFo</a></li>
                  <li><a style={{ color: "#61b3ff" }} href="https://youtu.be/SD7YNLv5Evc">https://youtu.be/SD7YNLv5Evc</a></li>
                </ul>
              </li>
              <li>Further help: <a style={{ color: "#61b3ff" }} href="tel:+916267453755">Palash Mone</a>, <a style={{ color: "#61b3ff" }} href="tel:+917440833782">Somya Parihar</a></li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Devathon;