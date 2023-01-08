import React from "react";

const data = [
  {
    title: "Popular Games",
    items: [
      {
        cover: "",
        title: "Plundur.io",
        info: "3D pirate game",
      },
      {
        cover: "",
        title: "CrazyRun.io",
        info: "3D run game",
      },
      {
        cover: "",
        title: "CrazyBall.io",
        info: "Snowball game",
      },
    ],
  },
  {
    title: "LEGiON Ecosystem",
    items: [
      {
        cover: "",
        title: "LEGiON Portal",
        info: "1000+ Games",
      },
      {
        cover: "",
        title: "LEGiON Distribution",
        info: "For publishers",
      },
      {
        cover: "",
        title: "LEGiON Publishing",
        info: "For developers",
      },
    ],
  },
  {
    title: "Featured Games",
    items: [
      {
        cover: "",
        title: "The Seas",
        info: "Warship game",
      },
      {
        cover: "",
        title: "Build Survival",
        info: "Building game",
      },
      {
        cover: "",
        title: "Desert Dunes",
        info: "FPS Game",
      },
    ],
  },
  {
    title: "Coming Soon",
    items: [
      {
        cover: "",
        title: "Survival",
        info: "3D survival game",
      },
      {
        cover: "",
        title: "Ocean",
        info: "3D ocean game",
      },
    ],
  },
];

export default function ProductsDetails() {
  return (
    <div className="nav-item-expanded">
      <div className="wrapper products">
        {data.map((item, index) => (
          <section key={index} className="products-section">
            <div className="products-title">{item.title}</div>
            <div className="item-list">
              {item.items.map((currItem, index2) => (
                <div key={index2} className="item">
                  <div className="icoCont"></div>
                  <div className="infoCont">
                    <div className="infoTitle">{currItem.title}</div>
                    <div className="infoDetail">{currItem.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
