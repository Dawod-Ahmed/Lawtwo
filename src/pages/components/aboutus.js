import React from "react";
import { Aboutus } from "../../images/images";

const AboutUs = () => {
  return (
    <>
      {/* https://www.freepik.com/vectors/book */}

      <div
        id="about_us"
        className="aboutus-container-parent d-flex flex-column justify-content-center  align-items-center py-5 h-auto"
      >
        <h1 className="aboutus-title text-center fw-bold">
          What the Team Says
        </h1>
        <div className="containers app-edu-container d-flex  my-3">
          <img className="aboutus-img" src={Aboutus} alt="" />
          <div className="aboutus-body d-flex align-items-center  my-3 my-md-4 ">
            <p className="aboutus-para ">
              The team is always working to being real value to the life of
              people by educating them. Weather it's technology or informaation,
              we are continuously improving on it. We try to allign our goal,
              FREEDOM IS JUST A CLICK AWAY, with everything we do. <br />
              <br />
              The team is always working to being real value to the life of
              people by educating them. Weather it's technology or information,
              we are continuously improving on it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
