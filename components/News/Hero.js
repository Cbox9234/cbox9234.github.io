import Image from "next/image";
import React from "react";
import Cover from "../../res/news/big.png";

export default function Hero() {
  return (
    <section className="aSection newsHero policiesHero genericHero2">
      <div className="mainCont">
        <div className="sub-title">LEGiON PRESS RELEASE</div>
        <div className="title">Plundur Beta launch</div>
        <div className="sub-title">December 12th, 2021</div>
        <div className="coverCont">
          <Image className="cover" src={Cover} alt="Cover"></Image>
        </div>
      </div>
    </section>
  );
}
