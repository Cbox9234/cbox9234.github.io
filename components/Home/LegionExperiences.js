/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const listOfGames = [
  {
    cover:
      "https://legionwsite.my.canva.site/images/a694106f5b25d2dfcd08ec599604def2.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/6a4f1d583174d5a7c897889c69c16051.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/5cbf632ce6e6955c98fafbbe9b4dcafb.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/870b4d3e10ade55c562807263c85e5f6.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/ef9e0761e6ce35d8765c1ca12c5c3d85.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/d29abc71c16ab1607f5be8c43bea4b26.png",
    title: "Test",
  },
];

const listOfGames2 = [
  {
    cover:
      "https://legionwsite.my.canva.site/images/3ba41a39a4f113c77110c77fd2338a7e.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/f5e8ca2628bfa6abe0794f522d12282f.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/66d5b724fce64eca272bac434de3663a.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/83bc0c12256a022c7106f95bb23ad71a.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/3e391bcf2415ed2f88ed6ea9dbf79232.png",
    title: "Test",
  },
  {
    cover:
      "https://legionwsite.my.canva.site/images/5d673e2d23a2945f33be5a877a866374.png",
    title: "Test",
  },
];

export default function LegionExperiences() {
  return (
    <section id="legionExperiences" className="aSection legionexperiences">
      <div className="title">LEGiON Experiences</div>
      <div className="info">Quality experiences, available for everyone</div>
      <div className="slider">
        <div className="slide-track">
          {listOfGames.map((item, index) => (
            <div key={index} className="slide">
              <div className="gameName">{item.title}</div>
              <img src={item.cover} alt="photo"></img>
            </div>
          ))}
          {listOfGames.map((item, index) => (
            <div key={index} className="slide">
              <div className="gameName">{item.title}</div>
              <img src={item.cover} alt="photo"></img>
            </div>
          ))}
        </div>
      </div>
      <div className="slider slider2">
        <div className="slide-track">
          {listOfGames2.map((item, index) => (
            <div key={index} className="slide">
              <div className="gameName">{item.title}</div>
              <img src={item.cover} alt="photo"></img>
            </div>
          ))}
          {listOfGames2.map((item, index) => (
            <div key={index} className="slide">
              <div className="gameName">{item.title}</div>
              <img src={item.cover} alt="photo"></img>
            </div>
          ))}
        </div>
      </div>

      <button>See Full Lineup</button>
    </section>
  );
}
