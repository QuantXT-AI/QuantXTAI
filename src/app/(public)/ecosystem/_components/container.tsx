"use client";

import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Section2 from "./section-2";
import ContainerWrapper from "./containerWrapper";

const Section1 = dynamic(() => import("./section-1"), {
  ssr: false,
})

export default function Container() {
  return (
    <ContainerWrapper isLoaded>
        <Section1 />
        <Section2 />
    </ContainerWrapper>
  );
}
