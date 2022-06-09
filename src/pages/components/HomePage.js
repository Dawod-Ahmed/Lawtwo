import * as React from "react";

// import {
//   Header,
//   Hero,
//   AboutApp,
//   AboutUs,
//   VideoSec,
//   Appeducation,
//   DownloadAppSec,
//   Footer,
// } from "./components";
import Header from "./header";
import Hero from "./hero";
import AboutApp from "./about_mobile";
import AboutUs from "./aboutus";
import VideoSec from "./videoSec";
import Appeducation from "./appeducation";
import DownloadAppSec from "./installapp_sec";
import Footer from "./footer";
// import {Route,Sw} from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutApp />
      <AboutUs />
      <VideoSec />
      <Appeducation />
      <DownloadAppSec />
      <Footer />
    </>
  );
}

export default Home;
