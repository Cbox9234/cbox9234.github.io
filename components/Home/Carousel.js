import Image from "next/image";
import c1 from "../../res/carousel/c1.png";
import c1Sq from "../../res/carousel/c1_sq.png";
import c2 from "../../res/carousel/c2.png";
import c2Sq from "../../res/carousel/c2_sq.png";

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
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c2} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c2Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
        <div className="card">
          <Image className="card-bg" src={c1} alt="gamePhoto"></Image>
          <div className="title-cont">
            <Image src={c1Sq} alt="game square image"></Image>
            <div className="card-title">Snow Blast</div>
          </div>
          <div className="info">The ultimate snowball fight game</div>
          <button className="card-btn">Play</button>
        </div>
      </div>
    </div>
  );
}
