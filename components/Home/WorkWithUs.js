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
          backgroundImage: `url("https://cdn.discordapp.com/attachments/886692415572946984/1062810800533807255/image.png")`,
        }}
      ></div>
    </section>
  );
}
