import Head from "next/head";
import Image from "next/image";
import bg from "../res/heroBG.png";
import logo from "../res/logo.png";
import g1 from "../res/g1.png";
import g2 from "../res/g2.png";
import g5 from "../res/g5.png";
import g6 from "../res/g6.png";
import OurCulture from "../components/Careers/OurCulture";
import Carousel from "../components/Home/Carousel";
import CompanyNews from "../components/Company/CompanyNews";
import Partnership from "../components/Home/Partnership";
import Contact from "../components/Home/Contact";
import Partner from "../components/Home/Partner";
import FAQ from "../components/Home/FAQ";
import Users from "../components/Home/Users";
import Footer from "../components/Footer/Footer";
import LegionExperiences from "../components/Home/LegionExperiences";
import ScopedItems from "../components/Home/ScopedItems";
import Nav from "../components/Nav";
import WorkWithUs from "../components/Home/WorkWithUs";
import Company from "../components/Home/Company";
import { useRouter } from "next/router";
import EcoSystem from "../components/Home/EcoSystem";

export default function Home() {
  const router = useRouter();
  const gotoExplore = () => {
    const elem = document.createElement("a");
    elem.href = "#legionExperiences";
    elem.click();
  };
  return (
    <>
      <Head>
        <title>Legion Platforms</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="companyHeroBg">
          <img
            src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fn3.61cc842e.png&w=640&q=75"
            alt="logo"
          />
        </div>

        <div className="mainWrapper">
          <section className="companyHero">
            <div className="lCont">
              <div className="sub-title">About LEGiON Platforms</div>
              <div className="title">
                We are building<br></br>new worlds.
              </div>
              <button onClick={() => router.push("/company")}>
                Explore Our Company
              </button>
            </div>
            <div className="rCont">
              <div>
                <Image src={g1} alt="photo 1" />
              </div>
              <div>
                <Image src={g2} alt="photo 2" />
              </div>
              <div>
                <Image src={g5} alt="photo 5" />
              </div>
              <div>
                <Image src={g6} alt="photo 6" />
              </div>
            </div>
          </section>

          <OurCulture
            title="Our Products Are Used By"
            data={[
              {
                logo: "ri-group-2-line",
                head: "Consumers",
                info: "We create, publish and distribute products to millions",
              },
              {
                logo: "ri-leaf-fill",
                head: "Publishers",
                info: "We provide publishers with world class products",
              },
              {
                logo: "ri-code-s-slash-line",
                head: "Developers",
                info: "We enable developers to reach millions with our services",
              },
              {
                logo: "ri-line-chart-line",
                head: "Advertisers",
                info: "Reach the next generation of consumers using our solutions",
              },
            ]}
          />

          <section className="aSection">
            <Carousel title="Popular Products" />
          </section>
          <WorkWithUs />
          <CompanyNews />
          <Users />
          <Footer />
        </div>
      </main>
    </>
  );
}
