import React from "react";

import "./teamCard.css";

const TeamCard = ({img, name, title, instagram, whatsapp, linkedin}) => {
  return (
    <>
      <div className="team-card-main-container">
        <div className="team-card-img-container">
          <img src={img} className="team-card-img"/>
        </div>
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
        <div className="team-social-links-container">
          {
            instagram ? <a href={instagram}><i className="fa-brands fa-social-mod fa-instagram"></i></a> : ""
          }
          {
            whatsapp ? <a href={whatsapp}><i className="fa-brands fa-social-mod fa-whatsapp"></i></a> : ""
          }
          {
            linkedin ? <a href={linkedin}><i className="fa-brands fa-social-mod fa-linkedin"></i></a> : ""
          }
        </div>
      </div>
    </>
  );
}

export default TeamCard;
