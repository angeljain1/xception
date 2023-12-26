import React from "react";

const DevathonProjects = ({ title, desc, head, contact, sno }) => {
  return (
    <>
      <div className="devathon-inner-inner-content-container">

        <div className="devathon-project-title-container">
          <div className="devathon-project-title-number-container">
            <p className="devathon-project-title-number">{sno}.</p>
          </div>
          <p className="devathon-project-title">{title}</p>
        </div>
        <div className="devathon-project-main-content">
          {desc}
        </div>
        <div className="devathon-project-head">
          Head: <a style={{ color: "#61b3ff" }} className="devathon-project-head" href={contact}>{head}</a>
        </div>
      </div>
    </>
  )
}

export default DevathonProjects;