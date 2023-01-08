import React from "react";

const data = [
  {
    title: "Information",
    items: [
      {
        title: "About LEGiON",
      },
    ],
  },
  {
    title: "Work With Us",
    items: [
      {
        title: "Careers",
      },
      {
        title: "Internships",
      },
    ],
  },
];

export default function CompanyDetails() {
  return (
    <div className="nav-item-expanded">
      <div className="wrapper products">
        {data.map((item, index) => (
          <section key={index} className="products-section">
            <div className="products-title">{item.title}</div>
            <div className="item-list">
              {item.items.map((currItem, index2) => (
                <div key={index2} className="item">
                  <div className="infoCont">
                    <div className="infoTitle">{currItem.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
