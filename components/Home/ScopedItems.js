import Image from "next/image";
import React from "react";
import cover from "../../res/g4_landscape.png";
import g6 from "../../res/g6.png";
import g1 from "../../res/g1.png";
import g2 from "../../res/g2.png";
import g5 from "../../res/g5.png";

export default function ScopedItems() {
  return (
    <section className="aSection scopedItemSection">
      <div className="scopedItems">
        <div className="scopedItem">
          <Image src={cover} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Plundur.io</div>
            <div className="card-info">
              Multiplayer 3D pirate game on browser
            </div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={g2} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Survival</div>
            <div className="card-info">Multiplayer 3D survival game</div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={g1} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Ocean</div>
            <div className="card-info">Ocean exploration survival game</div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={g6} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Bug catch</div>
            <div className="card-info">
              Multiplayer 3D pirate game on browser
            </div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={cover} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Plundur.io</div>
            <div className="card-info">
              Multiplayer 3D pirate game on browser
            </div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={g2} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Survival</div>
            <div className="card-info">Multiplayer 3D survival game</div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
        <div className="scopedItem">
          <Image src={g5} alt="cover" />
          <div className="detailsCont">
            <div className="card-title">Winter game</div>
            <div className="card-info">
              Multiplayer 3D pirate game on browser
            </div>
            <div className="actionCont">
              <button>
                <i className="ri-arrow-right-s-line"></i>
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
