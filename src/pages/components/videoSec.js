import React from "react";

const VideoSec = () => {
  return (
    <>
      <div className="videosec-parent d-flex justify-content-center my-5 py-4 ">
        <div className="videosec-main w-100 ">
          <div className="video-sec-top d-flex flex-column align-items-center">
            <h2 className="videosec-h fw-bold">Know Your Rights</h2>
            <p className="videosec-para text-center  ">
              Laws On Demand can help you find clear, in-depth definitions of
              legal terminology right on your Phone.
            </p>
          </div>
          <div className="video-sec-bottom d-flex justify-content-center m-auto my-lg-4 my-lg-5 ">
            <iframe
              className="youtube-video "
              src="https://www.youtube.com/embed/lJOpSkyBl2Y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSec;
