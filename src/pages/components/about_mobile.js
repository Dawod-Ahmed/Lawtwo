import React from "react";
import { Trusted, Easy, Smart } from "../../images/images";
const About_mobile = () => {
  return (
    <>
      {/* <span id="our_app" ></span> */}
      <div
        // id="about_link"
        className="app-container-parent d-flex justify-content-center  my-5 h-auto"
        id="our_app"
      >
        <div className=" app-container  d-flex justify-content-between    mx-0 h-auto ">
          <div className="card about-app  d-flex flex-column align-items-center   mx-0   border-0 text-start px-0 px-md-3  mb-5">
            <div className="card-body d-flex flex-column justify-content-center about-app-body p-0 text-center text-md-start">
              <h1 className="card-title mb-md-3   fw-bold">About App</h1>
              <p className="card-text about-detail">
                Laws On Demand gives you free, instant access to more than
                20,000 legal terms from authoritative sources trusted by
                attorneys, including West's Encyclopedia of American Law.
              </p>
            </div>
          </div>

          <div className="card app-features d-flex justify-content-center   px-0 ">
            <div class="app-feature feature-1 d-flex flex-column flex-md-row   border  ">
              <img
                src={Easy}
                alt="img"
                className="about-app-icon col-5  mr-1 "
              />

              <div className="card-body p-0">
                <h5 className="card-title mb-0 fw-bold fs-4">Easy</h5>
                <p className="card-text">
                  User-friendly, comprehensive, and authoritative: Laws On
                  Demands is the perfect free legal app for lawyers, legal
                  professionals, law school students, and anyone looking to
                  decipher legal jargon and better understand legal advice.
                </p>
              </div>
            </div>
            <div class="app-feature feature-2 d-flex flex-column flex-md-row   border">
              <img
                src={Smart}
                alt="img"
                className="about-app-icon col-5  mr-1 "
              />

              <div className="card-body p-0">
                <h5 className="card-title  mb-0 fw-bold fs-4">Smart</h5>
                <p className="card-text">
                  Whether you're an attorney, law student, or looking to better
                  understand complex legal advice, Laws On Demand can help you
                  find clear, in-depth definitions of legal terminology right on
                  your iPhone.
                </p>
              </div>
            </div>
            <div class="app-feature feature-3 d-flex flex-column flex-md-row   border">
              <img
                src={Trusted}
                alt="img"
                className="about-app-icon col-5  mr-1 "
              />

              <div className="card-body p-0">
                <h5 className="card-title  mb-0 fw-bold fs-4">
                  Trusted & Free
                </h5>
                <p className="card-text">
                  Laws On Demand gives you free, instant access to more than
                  20,000 legal terms from authoritative sources trusted by
                  attorneys, including West's Encyclopedia of American Law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="about_link"></span>
    </>
  );
};

export default About_mobile;
