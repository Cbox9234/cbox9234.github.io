import React from "react";

const data = [
  {
    title: "Help/Support",
    items: [
      {
        title: "Help Center",
      },
      {
        title: "Support Email",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        title: "Careers",
      },
      {
        title: "Internships",
      },
    ],
  },
  {
    title: "Policies",
    items: [
      {
        title: "Ethics",
      },
      {
        title: "Inclusion",
      },
      {
        title: "Accessibility",
      },
    ],
  },

  {
    title: "Community",
    items: [
      {
        title: "Social Media",
      },
      {
        title: "Playtesting",
      },
      {
        title: "News/Press",
      },
    ],
  },
];

export default function ResourcesDetails() {
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
