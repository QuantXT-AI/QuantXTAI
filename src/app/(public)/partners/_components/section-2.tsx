"use client"
import dynamic from "next/dynamic";


const Circle = dynamic(() => import("@/components/circle"));

export default function Section2() {
  return (
    <section className="h-auto w-screen">
      <div className="pt-[40rem] sm:pt-[40rem] md:pt-0 lg:pt-0">
        <Circle />
      </div>
    </section>
  );
}
