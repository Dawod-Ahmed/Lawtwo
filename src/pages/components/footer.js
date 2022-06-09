import React, { useEffect } from "react";
// import Facebook from '../icons/facebook.png'
// import Twitter from '../icons/twitter.png'
// import Instagram from '../icons/instagram.png'
import { Instagram, Facebook, Twitter } from "../../images/images";

const Footer = () => {

  const backtotop = () => {
    // window.scrollTo(0, 0);
  };
  useEffect(() => {
  
    // window.addEventListener("scroll", function () {
    //   var scroll = document.querySelector(".back-to-top-scroll");
    //   scroll.classList.toggle("active-scroll", window.scrollY > 250);
    // });
    console.log("scroll")
  });
  

  return (
    <>
      {/* <hr /> */}
      <div className="footer-container-parent d-flex justify-content-center  bg-white border-top">
        <div className="container  footer-container justify-content-between d-flex  mx-0 row text-black pt-5 ">
          <div className="f-ul-parent d-flex align-items-center justify-content-lg-center col-10 col-md-6 col-lg-2  text-md-center mb-4 mb-md-4 mb-lg-0 pb-md-4">
            <a href="#" className="f-logo-img-link">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/3f/1e/9c/3f1e9c9b-d5b5-369a-58d1-6f81a752c627/AppIcon-1x_U007emarketing-0-8-0-0-85-220.png/460x0w.webp"
                alt="img not found"
                className="f-logo-img"
              />
            </a>
          </div>

          <div className="f-ul-parent col-10 col-md-6 col-lg-2  text-md-center mb-3 mb-md-4 mb-lg-0 d-flex flex-column align-items-start  ">
            <p className="f-ul-title h5 fw-bold"> COMPANY</p>
            <ul className="f-ul list-unstyled d-flex flex-column align-items-start">
              <a href="#our_app" className="text-decoration-none f-links mt-2">
                <li className="f-li ">About Us</li>
              </a>
              <a
                href="#about_us"
                className=" text-decoration-none f-links mt-1"
              >
                <li className="f-li">Our App</li>
              </a>
              <a
                href="#features"
                className=" text-decoration-none f-links mt-1"
              >
                <li className="f-li">Services</li>
              </a>
            </ul>
          </div>

          <div className="f-ul-parent col-10 col-md-6 col-lg-3  text-md-center mb-3 mb-md-4 mb-lg-0">
            <p className="f-ul-title  h5 fw-bold d-flex flex-column align-items-start ">
              CONTACT US
            </p>
            <ul className="f-ul list-unstyled d-flex flex-column align-items-start ">
              <a
                href="mailto:admin@lawzondemand@gmail.com"
                className="f-gmail-link text-decoration-none text-black f-links"
              >
                <li className="f-li mt-2">lawondemand@gmail.com</li>
              </a>
            </ul>
            <div className="social-media-icons d-flex justify-content-start mt-2">
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src={Facebook}
                  width="18px"
                  height="18px"
                  alt=""
                  className="social-media-icons-img "
                />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img
                  src={Twitter}
                  width="18px"
                  height="18px"
                  alt=""
                  className="social-media-icons-img "
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  src={Instagram}
                  width="18px"
                  height="18px"
                  alt=""
                  className="social-media-icons-img "
                />
              </a>
            </div>
          </div>
          <div className="f-ul-parent col-10 col-md-6 col-lg-3  text-md-center mb-3 mb-md-4 mb-lg-0">
            <p className="f-ul-title f-ul-title-qs h4 d-flex flex-column align-items-start  fw-bold">
              Have any Question
            </p>
            <ul className="f-ul list-unstyled d-flex flex-column align-items-start mt-3">
              <a
                href="mailto:admin@lawzondemand@gmail.com"
                className=" text-decoration-none"
              >
                <li className="f-li contact-support-li rounded-pill text-white py-2 px-4 fw-bold">
                  Contact Support
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="website-creator-parent d-flex align-items-center justify-content-center ">
        Designed By&nbsp;&nbsp;
        <a href="#" className="website-creator text-decoration-none">
          {" "}
          Dawood Ahmed
        </a>
      </div>

      <div
        className="back-to-top-scroll  position-fixed rounded  justify-content-center align-items-center pt-1"
        onClick={backtotop}
      >
        <div className="back-to-top-icon  w-50 h-50  "></div>
      </div>
    </>
  );
};

export default Footer;
