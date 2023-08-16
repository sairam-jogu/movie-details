import React, { useEffect, useState } from "react";
// import {YouTube} from 'react-youtube';
import YouTube from "react-youtube";

const Trailer = ({ yes }) => {
  const [width, setWidth] = useState(1040);
  const [height, setHeight] = useState(490);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let winWidth = window.innerWidth;

      if (winWidth <= 320) {
        setWidth(250);
        setHeight(200);
      } else if (winWidth <= 780) setWidth(400);
      else setWidth(1040);
    });
  }, []);

  const opts = {
    height: `${height}`,
    width: `${width}`,
  };

  return (
    <>
      <div
        className="modal fade "
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content " style={{ background: "black" }}>
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-white"
                id="exampleModalToggleLabel"
              >
                Trailer
              </h1>
              <button
                type="button"
                className="btn-close my-btn"
                style={{ color: "white" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <YouTube opts={opts} videoId={yes[0].key} />
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn my-btn p-2"
        style={{ cursor: "pointer", margin: 3 }}
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Watch Trailer
      </button>
    </>
  );
};

export default Trailer;
