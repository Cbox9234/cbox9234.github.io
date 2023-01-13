import React from "react";

export default function OurCulture() {
  return (
    <section className="aSection ourCulture">
      <div className="mainCont">
        <div className="title">Our Culture</div>
        <div className="cultures">
          <div className="item">
            <div className="lCont">
              <i className="ri-lightbulb-flash-line"></i>
            </div>
            <div className="rCont">
              <div className="header">We innovate</div>
              <div className="info">
                Be a part of a company that puts innovation first.
              </div>
            </div>
          </div>

          <div className="item">
            <div className="lCont">
              <i className="ri-leaf-fill"></i>
            </div>
            <div className="rCont">
              <div className="header">Personal Development</div>
              <div className="info">
                We provide many learning and growth opportunities
              </div>
            </div>
          </div>

          <div className="item">
            <div className="lCont">
              <i className="ri-funds-line"></i>
            </div>
            <div className="rCont">
              <div className="header">Rapid Growth</div>
              <div className="info">
                Be a part of a fast-growning company environment
              </div>
            </div>
          </div>

          <div className="item">
            <div className="lCont">
              <i className="ri-tools-fill"></i>
            </div>
            <div className="rCont">
              <div className="header">We build new worlds</div>
              <div className="info">
                Here at LEGiON - we plan, we build, and we finish
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
