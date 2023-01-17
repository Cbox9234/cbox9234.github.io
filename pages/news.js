import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Hero from "../components/News/Hero";

export default function News() {
  return (
    <>
      <Head>
        <title>Legion Platforms - News</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <div className="newsTextSet">
            <div className="info">
              LEGiON Platforms is committed to conducting business in accordance
              with the highest ethical standards. The following policy serves as
              a guide to help all employees make responsible and ethical
              decisions. Confidentiality: LEGiON Platforms recognizes the
              importance of protecting the confidential information of our
              clients, partners, and employees. All parties are expected to
              maintain the confidentiality of any sensitive information shared
              in the course of business. Fair Treatment: LEGiON Platforms is
              committed to treating all customers and clients with fairness and
              impartiality. We will not discriminate against any person on the
              basis of race, religion, gender, sexual orientation, age, or any
              other characteristic protected by law. Respect for Others: LEGiON
              Platforms expects all employees to respect the rights and dignity
              of all individuals, including clients, employees, partners, and
              competitors. Any form of harassment, discrimination or
              disrespectful behavior will not be tolerated. Global Reach: LEGiON
              Platforms serves a massive online customer base across the world.
              We are committed to maintaining the highest standards of business
              conduct in all the countries and regions in which we operate.
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
