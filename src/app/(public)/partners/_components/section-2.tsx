"use client"
import dynamic from "next/dynamic";


const Circle = dynamic(() => import("@/components/circle"), {
  ssr: false,
});

export default function Section2() {
  return (
    <section className="h-auto w-screen bg-gradient-to-b from-[#2E0D19] to-[#2E0D16]">
      <div className="pt-[40rem] sm:pt-[40rem] md:pt-0 lg:pt-0">
        <Circle />
      </div>
    </section>
  );
}
