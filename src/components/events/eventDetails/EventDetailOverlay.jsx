import React, { useEffect, useState } from "react";

import "./eventDetails.css";

const EventDetailOverlay = ({ hideOverlay, data }) => {
  const handleEventDetailOverlayClose = () => {
    hideOverlay();
  }

  return (
    <>
      <div className="event-det-overlay-container" id="event-detail-overlay">
        <div className="event-detail-overlay-inner-container">
          <div className="event-detail-overlay-close-outer-container" onClick={handleEventDetailOverlayClose}>
            <div className="event-detail-overlay-close-container">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="event-detail-overlay-image-container">
            <img src={data.url} className="event-detail-overlay-img" />
          </div>
          <div className="event-detail-overlay-content-container">
            <div className="event-detail-content-name">
              {data.name}
            </div>
            <div className="event-detail-content-dt">
              Date: {data.date}
            </div>
            {/* <div className="event-detail-content-dt">
              Time: {data.time}
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: data.details }} className="event-detail-content-desc" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetailOverlay;
