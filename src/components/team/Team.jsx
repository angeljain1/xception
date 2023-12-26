import React from "react";
import { motion } from "framer-motion";

import TeamCard from "./teamCard/TeamCard";
import Footer from "../footer/Footer";

import teamMembersData from "./teamMembersData";

import "./team.css";

const Team = () => {
  return (
    <>
      <div className="team-main-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="development-team-header">
            <b>
              Xception <span>Core</span> Team
            </b>
          </h2>
          {/* <h2 className="core-team-header">Xception Core Team</h2> */}
          <div className="team-cards-container">
            {teamMembersData.map((t) => {
              return (
                <div className="team-card-wrapper development-team-container">
                  <TeamCard
                    img={t.img}
                    name={t.name}
                    title={t.title}
                    instagram={t.instagram}
                    whatsapp={t.whatsapp}
                    linkedin={t.linkedin}
                  />
                </div>
              );
            })}
          </div>
          {/* <h2 className="development-team-header">
            <b>
              Xception <br className="xc-develop-break" />{" "}
              <span>Development</span> Team
            </b>
          </h2>
          <div className="development-team-container">
            <TeamCard
              img={angel}
              name="Angel Jain"
              title="Web Development Co-Head"
              instagram="https://instagram.com/darkstation.exe"
              whatsapp=""
              linkedin="https://www.linkedin.com/in/angeljainfx"
            />
            <TeamCard
              img={nagendra}
              name="Nagendra Chouhan"
              title="Web Development Co-Head"
              instagram="https://instagram.com/nagendra_0_1?igshid=YmJhNjkzNzY="
              whatsapp=""
              linkedin="https://www.linkedin.com/in/nagendra-chouhan-b70042165"
            />
          </div> */}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
