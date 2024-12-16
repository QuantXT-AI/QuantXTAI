"use client";

import dynamic from "next/dynamic";

import Section4 from "./section-4";
import Section5 from "./section-5";
import Section7 from "./section-7";
import Section8 from "./section-8";

const Section1 = dynamic(() => import("./section-1"), {
  ssr: false,
});
const Section6 = dynamic(() => import("./section-6"), {
  ssr: false,
});

export default function Container() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Section1 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}
