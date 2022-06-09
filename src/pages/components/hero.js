import React, { useState } from "react";
import { HeroCellImage } from "../../images/images";
// import img from "../img/hero_img.svg"
const Hero = () => {
  // const [theme , settheme]=useState(false);

  // const themefun = ()=>{
  //     settheme(!theme);
  //     console.log(theme)
  // }

  return (
    <>
      <div
        id="home_link"
        className="hero-container-parent d-flex justify-content-center "
      >
        <div className="containers  hero_container_main d-flex justify-content-center px-4  mx-0 row">
          <div className="hero-right d-flex flex-column justify-content-center col-6 text-start  my-0">
            <h1 className="hero-title display-4 fw-bold">Law on Demand</h1>
            <p className="hero-para">
              Freedom is just a click away.We empower real people to make the
              best choices for themselves and their families.
            </p>
            {/* <input type="checkbox" onClick={themefun} /> */}
            <a
              href="#appinstall"
              className="text-light text-decoration-none text-center  main-btn"
            >
              Downlaod App
            </a>
          </div>

          <div className="hero-left col-6 d-flex justify-content-center justify-content-md-end ">
            <img src={HeroCellImage} className="w-100 h-100 hero-img" alt="" />
            {/* width: 255px !important;
    height: 460px !important; */}
            {/* <img    src="https://i.ibb.co/tDps870/heroimg.png" className="w-100 h-100 hero-img" alt="" /> */}
          </div>
        </div>
      </div>

      {/* <style jsx>{`  {  html, img, video, iframe {
            filter: ${theme ? "invert(1) hue-rotate(180deg)" : ""}
       } `}</style> */}
    </>
  );
};

export default Hero;
