import { useRouter } from "next/router";
import React from "react";

export default function WorkWithUs() {
  const router = useRouter();
  return (
    <section className="aSection workWithUs">
      <div className="sub-title">LEGiON Careers & Internships</div>
      <div className="title">Work With Us</div>
      <button onClick={() => router.push("/careers")}>
        View Careers & Internships
      </button>
      <div
        className="bg"
        style={{
          backgroundImage: `url("/res/cover_3_ppl.png")`,
        }}
      ></div>
    </section>
  );
}
