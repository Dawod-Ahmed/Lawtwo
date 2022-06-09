import React from "react";
// import img from "../img/image2.svg"
import { AppEducation } from "../../images/images";
const About = () => {
  return (
    <>
      <div
        id="features"
        className="eduapp-container-parent d-flex align-items-center my-0 h-auto "
      >
        <div className="container  eduapp-container h-auto ">
          <h2 className="eduapp-title text-center text-capitalize fw-bold">
            What You Can Find In LOD?
          </h2>
          <div className="eduapp-main d-flex justify-content-around ">
            <img className="eduapp-img " src={AppEducation} alt="img" />
            <div class="eduapp-para-parent  ">
              <div class="mb-3 width-content mx-auto">
                <h5 class="avenir-medium fw-bold fs-3">1. Laws for All</h5>
                <p class="px-3 features-detail-text">
                  Offers exclusively available for your credit/debit cards &amp;
                  UPI
                </p>
              </div>
              <div class="mb-3 width-content mx-auto">
                <h5 class="avenir-medium fw-bold fs-3">2. Bill of Rights</h5>
                <p class="px-3 features-detail-text">
                  Offers exclusively available for your credit/debit cards &amp;
                  UPI
                </p>
              </div>
              <div class="mb-3 width-content mx-auto">
                <h5 class="avenir-medium fw-bold fs-3">
                  3. Constitution of Different States
                </h5>
                <p class="px-3 features-detail-text">
                  Offers exclusively available for your credit/debit cards &amp;
                  UPI
                </p>
              </div>
              <div id="appinstall" class="width-content mx-auto">
                <h5 class="avenir-medium fw-bold fs-3">4. Law Codes</h5>
                <p class="px-3 features-detail-text">
                  Offers exclusively available for your credit/debit cards &amp;
                  UPI
                </p>
              </div>
            </div>

            {/* <img className="eduapp-img " src="https://i.ibb.co/5szh6Hy/about-us.png" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
