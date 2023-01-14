import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    title: "Ethics Policy",
    link: "/policies",
  },
  {
    title: "Inclusion",
    link: "/inclusion",
  },
  {
    title: "Accessibility",
    link: "/accessibility",
  },
];

export default function Tab({ curr }) {
  const router = useRouter();
  return (
    <div className="tab">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => router.push(item.link)}
          className={`${curr.title === item.title && "active"}`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
