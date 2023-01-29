/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero({ data }) {
  return (
    <section className="aSection newsHero policiesHero genericHero2">
      <div className="mainCont">
        <div className="sub-title">{data.pageType}</div>
        <div className="title">
          {data.shortTitle !== "blank" ? data.shortTitle : data.title}
        </div>
        <div className="sub-title">{data.date}</div>
        <div className="coverCont">
          <img className="cover" src={data.coverImage} alt="Cover"></img>
        </div>
      </div>
    </section>
  );
}
