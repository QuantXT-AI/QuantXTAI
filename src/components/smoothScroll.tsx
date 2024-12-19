"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const ScrollSmooth = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export default ScrollSmooth;