import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import $ from "jquery";

import EventDetailsCard from "./EventDetailsCard";
import EventDetailOverlay from "./EventDetailOverlay";
import Footer from "../../footer/Footer";
import eventData from "./eventData.jsx";

import "./eventDetails.css";

const EventDetails = () => {
  const [eventDataId, setEventDataId] = useState(
    new URLSearchParams(useLocation().search).get("id")
  );

  const [eventOverlayData, setEventOverlayData] = useState({});

  useEffect(() => { }, [eventDataId]);

  const eventDetailOverlayShow = () => {
    $("#event-detail-overlay-wrapper").fadeIn();
  }

  const eventDetailOverlayHide = () => {
    $("#event-detail-overlay-wrapper").fadeOut();
  }

  const handleEventDataTransferToOverlay = (data) => {
    setEventOverlayData(data);
  }

  return (
    <>
      <div id="event-detail-overlay-wrapper">
        <EventDetailOverlay hideOverlay={eventDetailOverlayHide} data={eventOverlayData} />
      </div>
      <div className="event-det-main-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {eventDataId == "technical"
            ? <div>
              <h3 className="name-event-header">
                Technical Events
              </h3>
              <div className="event-details-cards-container">
                {eventData.technical.events.map((data) => {
                  return (
                    <div onClick={() => handleEventDataTransferToOverlay(data)}>
                      <EventDetailsCard
                        eventDetailsCardImg={data.url}
                        eventName={data.name}
                        eventDate={data.date}
                        eventTime={data.addDet}
                        showOverlay={eventDetailOverlayShow}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            : ""}

          {eventDataId == "fun"
            ? <div>
              <h3 className="name-event-header">
                Fun Events
              </h3>
              <div className="event-details-cards-container">
                {eventData.funEvents.events.map((data) => {
                  return (
                    <div onClick={() => handleEventDataTransferToOverlay(data)}>
                      <EventDetailsCard
                        eventDetailsCardImg={data.url}
                        eventName={data.name}
                        eventDate={data.date}
                        eventTime={data.addDet}
                        showOverlay={eventDetailOverlayShow}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            : ""}

          {eventDataId == "attraction"
            ? <div>
              <h3 className="name-event-header">
                Center Of Attraction
              </h3>
              <div className="event-details-cards-container">
                {eventData.centerOfAttraction.events.map((data) => {
                  return (
                    <div onClick={() => handleEventDataTransferToOverlay(data)}>
                      <EventDetailsCard
                        eventDetailsCardImg={data.url}
                        eventName={data.name}
                        eventDate={data.date}
                        eventTime={data.addDet}
                        showOverlay={eventDetailOverlayShow}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            : ""}

          {eventDataId == "online"
            ? <div>
              <h3 className="name-event-header">
                Online Events
              </h3>
              <div className="event-details-cards-container">
                {eventData.onlineEvents.events.map((data) => {
                  return (
                    <div onClick={() => handleEventDataTransferToOverlay(data)}>
                      <EventDetailsCard
                        eventDetailsCardImg={data.url}
                        eventName={data.name}
                        eventDate={data.date}
                        eventTime={data.addDet}
                        showOverlay={eventDetailOverlayShow}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            : ""}


        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default EventDetails;
