"use client";

import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Section2 from "./section-2";

const Section1 = dynamic(() => import("./section-1"), {
  ssr: false,
})


export default function Container() {
  return (
    <Loading isLoaded={true}>
      <div className="bg-cryaistal bg-[length:120%_300%] bg-top">
        <Section1 />
        <Section2 />
        {/* <Section3 /> */}
      </div>
    </Loading>
  );
}
