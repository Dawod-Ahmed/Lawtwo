import React from "react";
// import Googleplay from "../img/g_play.png";
// import AppStore from "../img/app_store.png";
import { AppStoreBtn, GoogleStoreBtn } from "../../images/images";
const Installapp_sec = () => {
  return (
    <>
      <div className="appinstall-container d-flex justify-content-center align-items-center">
        <div className="appinstall-main">
          <h3 className="g-install-text my-0 px-5 py-3 fw-bold">
            Downlaod Our App
          </h3>
          <div className="appinstall-icon-parent d-flex flex-column align-items-center flex-md-row justify-content-md-center">
            <div className="install-app-parent  mx-0  ">
              <a
                href="https://play.google.com/store/apps/details?id=com.lawondemand"
                className="g-install-app-link d-flex align-items-center justify-content-center   border rounded-3 "
              >
                <img
                  src={GoogleStoreBtn}
                  alt="img"
                  className="g-install-app-img install-app-img w-100 h-100"
                />
              </a>
            </div>

            <div className="app-store-parent mx-0 mt-3 mt-md-0">
              <a
                href="https://apps.apple.com/us/app/laws-on-demand/id1512623448"
                className="app-install-app-link d-flex align-items-center justify-content-center   border rounded-3"
              >
                <img
                  src={AppStoreBtn}
                  alt=""
                  className="app-install-app-img install-app-img w-100 h-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Installapp_sec;
