import React from "react";
import data from "../../res/searchData.json";

const getGameByName = (gameName) => {
  return data.find((item) => item.name === gameName);
};

const scopedItemsData = [
  getGameByName("Plundur.io"),
  getGameByName("Survival"),
  getGameByName("Pristis"),
  getGameByName("Park Game"),
  getGameByName("The Seas"),
  getGameByName("Build Survival"),
  getGameByName("Snow Blast"),
];

const handleClick = (url) => {
  const elem = document.createElement("a");
  elem.href = url;
  elem.target = "blank";
  elem.click();
};

export default function ScopedItems() {
  return (
    <section className="aSection scopedItemSection">
      <div className="scopedItems">
        {scopedItemsData.map((item, index) => (
          <div key={index} className="scopedItem">
            <img
              src={
                item.name === "Snow Blast" ? item.squareImage : item.wideImage
              }
              alt="cover"
            />
            <div className="detailsCont">
              <div className="card-title">{item.name}</div>
              <div className="card-info">{item.shortDesc}</div>
              <div className="actionCont">
                {item.comingSoon !== "N" ? (
                  <button className="disabled">{item.comingSoon}</button>
                ) : (
                  <button onClick={() => handleClick(item.link)}>
                    <i className="ri-arrow-right-s-line"></i>
                    Play Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
