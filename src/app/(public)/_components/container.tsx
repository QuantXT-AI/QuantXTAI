"use client";

import dynamic from "next/dynamic";
import Loading from "@/components/loading";
import { useState } from "react";
import ContainerWrapper from "./containerWrapper";

const Section1 = dynamic(() => import("./section-1"), {
  ssr: false,
});

const Section6 = dynamic(() => import("./section-6"));

const Section4 = dynamic(() => import("./section-4"));

const Section5 = dynamic(() => import("./section-5"));

const Section7 = dynamic(() => import("./section-7"));

const Section8 = dynamic(() => import("./section-8"));

export default function Container() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <ContainerWrapper isLoading={isLoading}>
      <Section1 isLoading={isLoading} setIsLoading={setIsLoading} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </ContainerWrapper>
  );
}
