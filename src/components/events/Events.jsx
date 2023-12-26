import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import EventCard from "./eventCard/EventCard";
import Footer from "../footer/Footer";

import technoEve from "./assets/technoEvent.jpg";
import funEve from "./assets/funEvent.jpg";
import centerEve from "./assets/centerEvent.jpg";
import onlineEve from "./assets/onlineEvent.jpg";

import "./events.css";

const Events = () => {
  return (
    <>
      <div className="events-main-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="events-header">Explore Events</h2>
          <div className="event-cards-wrapper">
            <Link className="remUnder" to="/eventDetails?id=technical">
              <EventCard eventCategory="Technical Events" eventImg={technoEve} />
            </Link>
            <Link className="remUnder" to="/eventDetails?id=fun">
              <EventCard eventCategory="Fun Events" eventImg={funEve} />
            </Link>
          </div>
          <div className="event-cards-wrapper">
            <Link className="remUnder" to="/eventDetails?id=attraction">
              <EventCard eventCategory="Center Of Attraction" eventImg={centerEve} />
            </Link>
            <Link className="remUnder" to="/eventDetails?id=online">
              <EventCard eventCategory="Online Events" eventImg={onlineEve} />
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
