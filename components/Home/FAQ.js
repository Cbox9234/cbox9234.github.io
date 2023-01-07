import React from "react";
import FaqItem from "./subComponents/FaqItem";

export default function FAQ() {
  return (
    <section className="aSection faq">
      <div className="title">FAQ</div>
      <div className="faq-list">
        <FaqItem />
        <FaqItem />
      </div>
    </section>
  );
}
