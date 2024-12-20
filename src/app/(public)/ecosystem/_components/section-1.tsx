"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import React from "react";
import { isSafari } from "@/utils/boolean";

export default function Section1() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const overlayRobot = (children: React.ReactNode) =>
    isDesktop ? (
      <div className="bg-gradient-to-t from-[#190616] to-[rgba(0,0,0,0)]">
        {children}
      </div>
    ) : (
      children
    );

  return (
    <section className="relative w-full">
      {isDesktop ? (
          <div className="bg-[url('/assets/about-1/section-1/robot-1.png')] bg-[length:250px_auto] bg-left-bottom bg-no-repeat">
            <div className="bg-[url('/assets/about-1/section-1/robot-2.png')] bg-[length:250px_auto] bg-right-bottom bg-no-repeat">
              {overlayRobot(
                <div className="h-screen w-full overflow-hidden">
                  <video
                    src={`/assets/about-1/section-1/bg-video.${isSafari ? "mov" : "webm"}`}
                    autoPlay
                    loop
                    muted
                    className="h-auto w-full object-cover object-bottom opacity-20"
                    playsInline
                  />
                </div>
              )}
            </div>
          </div>
      ) : (
        <video
          src={`/assets/about-1/section-1/bg-video.${isSafari ? "mov" : "webm"}`}
          autoPlay
          loop
          muted
          className="absolute h-full w-auto bg-no-repeat object-cover opacity-50"
          playsInline
        />
      )}
      <div className="relative h-screen w-screen md:absolute md:left-0 md:top-0">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header isAbsolute />
          <div className="absolute h-screen w-full py-8 top-0 left-0 right-0">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="mb-4 rounded-full border border-white/25 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/components/header/item-3.png"
                    alt="pen"
                    width={480}
                    height={480}
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-medium text-white/50">
                    ECOSYSTEM
                  </span>
                </div>
              </div>
              <h2
                className="text-center text-3xl font-medium leading-[1.2] text-[#F4E0D5]/75 [text-shadow:0px_0px_4px_#F4E0D5] md:text-6xl sm:text-3xl lg:text-7xl"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                ALPHA-GENERATING
                <br /> INTEGRATION BASE
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
