import React from "react";

export default function Tab({ data, setTab, curr }) {
  return (
    <div className="tab">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => setTab(item)}
          className={`${curr.title === item.title && "active"}`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
