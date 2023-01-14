import Image from "next/image";
import React from "react";
import logo from "../../res/logo.png";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className="footerHero">
        <div className="lCont">
          <div className="logoCont">
            <Image src={logo} alt="logo" />
            LEGiON Platforms
          </div>
          <div className="footerHeroTitle">Experiences that matter.</div>
          <div className="location">
            <i className="ri-map-pin-2-fill"></i>United States
          </div>
        </div>
        <div className="rCont">
          <button onClick={() => router.push("/contact")}>Contact</button>
          <button>Partnership</button>
        </div>
      </div>
      <div className="footerMain">
        <section className="footerSection social">
          <div className="header">Social Media</div>
          <div className="socialMedia">
            <i className="ri-twitter-fill twitter icon"></i>
            <i className="ri-youtube-fill youtube icon"></i>
            <i className="ri-discord-fill discord icon"></i>
          </div>
          <div className="mainLogoCont">
            <Image src={logo} alt="logo" />
            <div>LEGiON Platforms</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Games</div>
          <div className="referenceHolder">
            <div>Plundur.io</div>
            <div>Plundur.io Social</div>
            <div>CrazyRun.io</div>
            <div>Snow Blast</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Platforms</div>
          <div className="referenceHolder">
            <div>LEGiON Portal</div>
            <div>LEGiON Distribution</div>
            <div>LEGiON Publishing</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Legal</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/terms_of_service")}>
              Terms of service
            </div>
            <div>Privacy</div>
            <div>GDPR</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Company</div>
          <div className="referenceHolder">
            <div>Accessibility</div>
            <div onClick={() => router.push("/policies")}>Ethics Policy</div>
            <div>Inclusion</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Directory</div>
          <div className="referenceHolder">
            <div>About LEGiON</div>
            <div onClick={() => router.push("/careers")}>Careers</div>
            <div>Help Center</div>
          </div>
        </section>
      </div>
      <div className="footerEnd">
        2023 LEGiON Platforms. All Rights Reserved.
      </div>
    </footer>
  );
}
