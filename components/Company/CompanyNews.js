/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CompanyNews({ mainpage = false, data = [] }) {
  return (
    <section className="aSection companyPageNews">
      {!mainpage && <div className="title">Latest Company News</div>}
      <div className="newsCont">
        {data.map(
          (item, index) =>
            item.pageType === "LEGiON Press Release" && (
              <div key={index} className="news">
                <img src={item.thumbnail} className="bg" alt="news" />
                <div>
                  <div className="info">
                    {item.date} | {item.category}
                  </div>
                  <div className="news-title">
                    {item.shortTitle !== "blank" ? item.shortTitle : item.title}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {!mainpage && <button>View All News</button>}
    </section>
  );
}
