import React from "react";
import poki from "../../res/partners/poki.png";
import frvr from "../../res/partners/frvr.png";
import krunker from "../../res/partners/krunker2.png";
import yendis from "../../res/partners/yendis.png";
import Image from "next/image";

export default function Partner() {
  yendis;
  return (
    <section className="aSection partners">
      <div className="title">Our Partners</div>
      <div className="partnerList">
        <div className="partner-item">
          <Image src={poki} alt="Poki" />
        </div>

        <div className="partner-item">
          <Image src={frvr} alt="Frvr" />
        </div>
        <div className="partner-item">
          <Image src={krunker} alt="Krunker" />
        </div>
        <div className="partner-item">
          <Image src={yendis} alt="Yendis" />
        </div>
      </div>
    </section>
  );
}
