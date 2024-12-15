"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export default function Section1() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F0B01] to-[#1F0B01]">
      {isDesktop ? (
        <div className="bg-[url('/assets/about-1/section-1/bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
          <div className="bg-[url('/assets/about-1/section-1/robot-1.png')] bg-[length:240px_auto] bg-left-bottom bg-no-repeat">
            <div className="bg-[url('/assets/about-1/section-1/robot-2.png')] bg-[length:240px_auto] bg-right-bottom bg-no-repeat">
              <div className="container mx-auto max-w-6xl px-4">
                <div className="h-full w-full overflow-hidden">
                  <div>
                    <video
                      src="/assets/about-1/section-1/bg-video.webm"
                      autoPlay
                      loop
                      muted
                      className="-mt-[320px] h-auto w-full object-cover object-bottom opacity-50"
                    />
                  </div>
                </div>
              </div>
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

      <div className="relative h-full w-full md:absolute md:left-0 md:top-0">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header />
          <div className="h-[300px] w-full py-8 md:h-[500px] md:py-16 lg:h-[640px]">
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
                className="text-center text-3xl font-medium leading-[1.2] text-[#F4E0D5]/75 [text-shadow:0px_0px_4px_#F4E0D5] md:text-6xl"
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
