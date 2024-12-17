"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export default function Section1() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const overlayRobot = (children: React.ReactNode) =>
    isDesktop ? (
      <div className="bg-[length:110%_90rem] bg-[url('/assets/components/overlay/overlay-robot.png')] bg-top bg-no-repeat">
        {children}
      </div>
    ) : (
      children
    );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#1F0B01] to-[#1F0B01]">
      {isDesktop ? (
        <div className="bg-[length:100%_auto] bg-[url('/assets/about-1/section-1/bg.png')] bg-bottom bg-no-repeat">
          <div className="bg-[length:250px_auto] bg-[url('/assets/about-1/section-1/robot-1.png')] bg-left-bottom bg-no-repeat">
            <div className="bg-[length:250px_auto] bg-[url('/assets/about-1/section-1/robot-2.png')] bg-right-bottom bg-no-repeat">
              {overlayRobot(
                <div className="h-screen w-full overflow-hidden">
                  <div>
                    <video
                      src="/assets/about-1/section-1/bg-video.webm"
                      autoPlay
                      loop
                      muted
                      className="-mt-[320px] h-auto object-cover object-bottom opacity-50"
                    />
                  </div>
                </div>,
              )}
            </div>
          </div>
        </div>
      ) : (
        <video
          src="/assets/about-1/section-1/bg-video.webm"
          autoPlay
          loop
          muted
          className="absolute h-auto w-full bg-no-repeat object-cover opacity-50"
        />
      )}
      <div className="relative h-screen w-screen md:absolute md:top-0 md:left-0">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header />
          <div className="absolute top-0 left-0 h-screen w-full py-8">
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
                  <span className="font-medium text-sm text-white/50">
                    ECOSYSTEM
                  </span>
                </div>
              </div>
              <h2
                className="text-center font-medium text-3xl text-[#F4E0D5]/75 leading-[1.2] [text-shadow:0px_0px_4px_#F4E0D5] sm:text-3xl md:text-6xl lg:text-7xl"
                data-aos="fade-up"
                data-aos-delay="1400"
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
