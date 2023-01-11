import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Accessability from "../../components/Policies/Accessability";
import EthicsPolicy from "../../components/Policies/EthicsPolicy";
import Hero from "../../components/Policies/Hero";
import Inclusion from "../../components/Policies/Inclusion";
import Tab from "../../components/Policies/Tab";

const tabs = [
  {
    title: "Ethics Policy",
  },
  {
    title: "Inclusion",
  },
  {
    title: "Accessability",
  },
];

export default function Policies() {
  const [currTab, setCurrTab] = useState(() => tabs[0]);
  return (
    <>
      <Head>
        <title>Legion Platforms - Policies</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <Tab data={tabs} curr={currTab} setTab={setCurrTab} />
          {currTab.title === tabs[0].title && <EthicsPolicy />}
          {currTab.title === tabs[1].title && <Inclusion />}
          {currTab.title === tabs[2].title && <Accessability />}
          <Footer />
        </div>
      </main>
    </>
  );
}
