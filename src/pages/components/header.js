import React, { useState } from "react";

const Header = () => {
  const [navExp, setNavExp] = useState(false);
  const [navli, setnavli] = useState([
    { li: "Home", id: "" },
    { li: "About App", id: "our_app" },
    { li: "About Us", id: "about_us" },
    { li: "Features", id: "features" },
  ]);

  const navExpand = () => {
    setNavExp(!navExp);
  };

  return (
    <>
      <div
        className="header-after position-fixed w-100 h-100 "
        onClick={navExpand}
      ></div>

      <div className="h-container-parent d-flex justify-content-center bg-white">
        <header className="containers  header-container ">
          <div className="header-main w-100 h-100 d-flex justify-content-between align-items-center">
            <a href="#" className="desktopview-header-logo h-100">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/3f/1e/9c/3f1e9c9b-d5b5-369a-58d1-6f81a752c627/AppIcon-1x_U007emarketing-0-8-0-0-85-220.png/460x0w.webp"
                alt=""
                className="header-logo "
              />
            </a>

            <div className="navbar-main  d-lg-block   ">
              <div className="logo-plus-cross-parent d-block d-flex justify-content-between mt-3">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/3f/1e/9c/3f1e9c9b-d5b5-369a-58d1-6f81a752c627/AppIcon-1x_U007emarketing-0-8-0-0-85-220.png/460x0w.webp"
                  className="nav-logo"
                />
                <div
                  className="nav-cross-parent d-flex flex-column justify-content-around "
                  onClick={navExpand}
                >
                  
                  <div className="w-100  nav-cross nav-cross-top   rounded"></div>
                  <div className="w-100 nav-cross nav-cross-bottom   rounded"></div>
                </div>
              </div>
              <ul className="navbar-ul list-unstyled m d-flex justify-content-between fw-bold  h-100 mb-0">
                {navli.map((value, index) => {
                  return (
                    <>
                      <a
                      key={index}
                        href={`#${value.id}`}
                        className="nav-li-link text-decoration-none  "
                      >
                        <li className="navbar-li align-self-center">
                          {value.li}
                          <div className="link-underline d-none  rounded-pill"></div>
                        </li>
                      </a>
                      {/* <div className=" w-100 h-25 bg bg-danger nav"></div> */}
                    </>
                  );
                })}
              </ul>
            </div>

            <div
              class="t-parent-link   d-flex justify-content-end align-items-center "
              onClick={navExpand}
            >
              <div class="t-parent d-flex flex-column  justify-content-between  align-items-end h-50  ">
                <div class="t-lines t-top   rounded-pill w-75"></div>
                <div class="t-lines t-midddle  rounded-pill w-75"></div>
                <div class="t-lines  t-bottom  rounded-pill w-75"></div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <div classname="header-height"></div> */}
      <style global jsx>{`
        .h-container-parent {
          background: ${navExp ? "none !important" : "white"};
        }
        .desktopview-header-logo img {
          visibility: ${navExp ? "hidden !important" : "visible !important "};
        }
        .header-after {
          display: ${navExp ? "block" : "none "};
        }

        .navbar-main {
          left: ${navExp ? "0% !important" : "-100% !important"};
        }

        .t-lines {
          display: ${navExp ? "none" : "block"};
        }
      `}</style>
    </>
  );
};

export default Header;
