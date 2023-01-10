import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/TermsOfService/Hero";
import Tab from "../../components/TermsOfService/Tab";
import TermsOfServiceSection from "../../components/TermsOfService/TermsOfServiceSection";

const tabs = [
  {
    title: "Terms Of Service",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Legal",
  },
  {
    title: "Security",
  },
  {
    title: "Help",
  },
];

export default function TermsOfService() {
  const [currTab, setCurrTab] = useState(() => tabs[0]);
  return (
    <>
      <Head>
        <title>Legion Platforms - Terms Of Service</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <Tab data={tabs} curr={currTab} setTab={setCurrTab} />
          {currTab.title === tabs[0].title && <TermsOfServiceSection />}

          <Footer />
        </div>
      </main>
    </>
  );
}
