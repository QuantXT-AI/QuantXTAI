"use client"
import Loading from "@/components/loading";
import dynamic from "next/dynamic";

const Section1 = dynamic(() => import("./section-1"), {
  ssr: false,
})

export default function Container() {
  return (
    <Loading isLoaded={true}>
      <Section1 />
    </Loading>
  );
}
