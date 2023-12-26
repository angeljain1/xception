import React, { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Events from './components/events/Events.jsx';
import EventDetails from './components/events/eventDetails/EventDetails.jsx';
import Merchandise from './components/merchandise/Merchandise.jsx';
import Team from './components/team/Team.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Sponsors from './components/sponsors/Sponsors.jsx';
import ScrollToTop from './ScrollToTop.js';
import Register from './components/register/Register.jsx';
import Devathon from './components/devathon/Devathon.jsx';

import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [toggleSound, setToggleSound] = useState(false);

  const handleVideoMusic = () => {
    setToggleSound(!toggleSound);
  }

  // setting document height to 100%
  const setWindowHt = () => {
    document.documentElement.style.setProperty('--vh', window.innerHeight + "px");
  }
  setWindowHt();
  window.addEventListener('resize', setWindowHt);


  return (
    <div className="global-app-container">
      <AnimatePresence>
        <BrowserRouter>
          <Navbar toggleSound={handleVideoMusic} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home setSound={toggleSound} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eventDetails" element={<EventDetails />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dev-a-thon" element={<Devathon />} />
          </Routes>
        </BrowserRouter>
      </ AnimatePresence>

      {/* <Share /> */}
    </div>
  );
}
