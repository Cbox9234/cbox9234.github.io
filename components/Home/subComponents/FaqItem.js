import React, { useState } from "react";

export default function FaqItem({ title, info }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="faq-item">
      <div
        className={`faq-item-cont ${expand && "noBorder"}`}
        onClick={() => setExpand(!expand)}
      >
        <div className="faq-title">How do I play LEGiON Games?</div>
        {expand ? (
          <i className="ri-arrow-up-s-line"></i>
        ) : (
          <i className="ri-arrow-down-s-line"></i>
        )}
      </div>
      {expand && (
        <>
          <div className="faq-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </>
      )}
    </div>
  );
}
