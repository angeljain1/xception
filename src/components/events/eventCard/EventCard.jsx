import React from "react";

import "./eventCard.css";

const Events = ({eventCategory, eventImg}) => {
  return (
    <>
      <div className="event-card-main-container">
        <div className="event-card-photo-container">
          <img src={eventImg} className="event-card-category-photo"/>
        </div>
        <p className="event-card-name-header">{eventCategory}</p>
      </div>
    </>
  );
}

export default Events;
