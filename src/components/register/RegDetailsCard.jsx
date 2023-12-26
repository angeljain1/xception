import React from "react";

const RegDetailsCard = ({ eventDetailsCardImg, eventName, eventDate, eventLink }) => {
  return (
    <>
      <div className="event-det-card-container">
        <div className="event-detail-card-image-container">
          <img src={eventDetailsCardImg} className="event-detail-card-img" />
        </div>
        <div className="event-detail-card-right-details-container">
          <h3 className="event-final-name-header">{eventName}</h3>
          <div>
            <p className="event-date-time">Date: {eventDate}</p>
            <p className="event-date-time">Register: <a target="_blank" className="reglinkfinal" href={eventLink}> Click Here!</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegDetailsCard;