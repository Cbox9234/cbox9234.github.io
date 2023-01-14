import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Inclusion from "../components/Policies/Inclusion";
import Hero from "../components/Policies/Hero";
import Tab from "../components/Policies/Tab";

export default function Policies() {
  return (
    <>
      <Head>
        <title>Legion Platforms - Inclusion</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Inclusion" />
          <Tab curr="Inclusion" />
          <Inclusion />
          <Footer />
        </div>
      </main>
    </>
  );
}
