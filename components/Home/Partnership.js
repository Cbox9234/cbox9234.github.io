import Image from "next/image";
import React from "react";
import earth from "../../res/earth.png";

export default function Partnership() {
  return (
    <section className="aSection partnership">
      <div className="title">Partner With LEGiON</div>
      <div className="info">Take your comapny/project to new heights.</div>
      <button>Apply For Partnership</button>

      <Image src={earth} alt="earth" />
    </section>
  );
}
