import React from "react";
import Image from "next/image";
import bigNewsBg from "../../res/news/big.png";
import newsBg1 from "../../res/news/n1.png";
import newsBg2 from "../../res/news/n2.png";
import newsBg3 from "../../res/news/n3.png";

export default function CompanyNews() {
  return (
    <section className="aSection companyPageNews">
      <div className="title">Latest Company News</div>
      <div className="newsCont">
        <div className="news">
          <img
            src="https://media.discordapp.net/attachments/1063575553610883182/1063580761116135434/4.png"
            className="bg"
            alt="news"
          />
          <div>
            <div className="info">JANUARY 7, 2023 | NEWS</div>
            <div className="news-title">
              LEGiON Platforms beta releases Plundur.io to 250+ countries
            </div>
          </div>
        </div>

        <div className="news">
          <img
            src="https://media.discordapp.net/attachments/1063575553610883182/1063580761116135434/4.png"
            className="bg"
            alt="news"
          />
          <div>
            <div className="info">JANUARY 7, 2023 | NEWS</div>
            <div className="news-title">
              LEGiON Platforms beta releases Plundur.io to 250+ countries
            </div>
          </div>
        </div>

        <div className="news">
          <img
            src="https://media.discordapp.net/attachments/1063575553610883182/1063580761116135434/4.png"
            className="bg"
            alt="news"
          />
          <div>
            <div className="info">JANUARY 7, 2023 | NEWS</div>
            <div className="news-title">
              LEGiON Platforms beta releases Plundur.io to 250+ countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
