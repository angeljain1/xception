import React from "react";

import "./eventDetails.css";

const EventDetailsCard = ({ eventDetailsCardImg, eventName, eventDate, eventTime, showOverlay }) => {
  const handleEventDetailOverlay = () => {
    showOverlay();
  }

  return (
    <>
      <div className="event-det-card-container" onClick={handleEventDetailOverlay}>
        <div className="event-detail-card-image-container">
          <img src={eventDetailsCardImg} className="event-detail-card-img" />
        </div>
        <div className="event-detail-card-right-details-container">
          <h3 className="event-final-name-header">{eventName}</h3>
          <div>
            <p className="event-date-time">Date: {eventDate}</p>
            {
              eventTime ? <p className="event-date-time">
                Register: {
                  eventTime.charAt(0) == "(" ? <span>{eventTime}</span> : <a target="_blank" href={eventTime} style={{ color: "#0085ff" }}>Click Here!</a>
                }
              </p> : ""
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetailsCard;
