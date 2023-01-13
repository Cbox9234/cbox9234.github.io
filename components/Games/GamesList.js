import Image from "next/image";
import React from "react";
import cover from "../../res/g4_landscape.png";
import g6 from "../../res/g6.png";
import g1 from "../../res/g1.png";
import g2 from "../../res/g2.png";
import g5 from "../../res/g5.png";
import data from "../../res/itemList.json";

export default function GamesList() {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };
  return (
    <section className="aSection gamesList">
      <div className="scopedItems">
        {data.map((item, index) =>
          item.game === "Y" ? (
            <div key={index} className="scopedItem">
              <img src={item.squareImage} alt="cover" />
              <div className="detailsCont">
                <div className="card-title">{item.name}</div>
                <div className="card-info"></div>
                <div className="actionCont">
                  <button onClick={() => handleClick(item.link)}>
                    <i className="ri-arrow-right-s-line"></i>
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
