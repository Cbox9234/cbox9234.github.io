import Image from "next/image";
import c1 from "../../res/carousel/c1.png";
import c1Sq from "../../res/carousel/c1_sq.png";
import c2 from "../../res/carousel/c2.png";
import c2Sq from "../../res/carousel/c2_sq.png";
import data from "../../res/itemList.json";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="actions">
        <div className="title">Featured Products</div>
        <i
          className="ri-arrow-left-s-line"
          onClick={() => {
            document.getElementById("carousel").scrollLeft -= 200;
          }}
        ></i>
        <i
          className="ri-arrow-right-s-line"
          onClick={() => {
            document.getElementById("carousel").scrollLeft += 200;
          }}
        ></i>
      </div>
      <div className="card-list" id="carousel">
        {data.map((item, index) =>
          item.game === "Y" ? (
            <div key={index} className="card">
              <img
                className="card-bg"
                src={item.wideImage}
                alt="gamePhoto"
              ></img>
              <div className="title-cont">
                <img src={item.squareImage} alt="game square image"></img>
                <div className="card-title">Snow Blast</div>
              </div>
              <div className="info">The ultimate snowball fight game</div>
              <button className="card-btn">Play</button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
