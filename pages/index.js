import Head from "next/head";
import Image from "next/image";
import bg from "../res/heroBG.png";
import logo from "../res/logo.png";
import image1 from "../res/g1.png";
import image2 from "../res/g2.png";
import image3 from "../res/g3.png";
import image4 from "../res/g4.png";
import image5 from "../res/g5.png";
import image6 from "../res/g6.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legion Platforms</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mainWrapper">
          <section class="hero">
            <Image className="heroBg" src={bg} alt="logo" />
            <Image className="heroBgLogo" src={logo} alt="logo" />
            <div className="lCont">
              <div className="title">Experiences that matter.</div>
              <div className="subTitle">
                We are building next generation of web/mobile technology
              </div>
              <div className="heroBtnSet">
                <button className="heroBtn">Explore</button>
                <button className="heroBtn">Contact</button>
              </div>
            </div>
            <div className="rCont">
              <Image className="gridItems" src={image1} alt="logo" />
              <Image className="gridItems" src={image2} alt="logo" />
              <Image className="gridItems" src={image3} alt="logo" />
              <Image className="gridItems" src={image4} alt="logo" />
              <Image className="gridItems" src={image5} alt="logo" />
              <Image className="gridItems" src={image6} alt="logo" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
