import React from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  return (
    <section className="aSection contact">
      <div className="title">Get in touch with us</div>
      <div className="info">
        Make an inquiry with us, we&apos;ll get back to you within a few
        business days.
      </div>
      <button onClick={() => router.push("/contact")}>Contact Us</button>
      <video
        src="https://cdn.discordapp.com/attachments/886692415572946984/1061280539467853854/bg.mp4"
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
}
