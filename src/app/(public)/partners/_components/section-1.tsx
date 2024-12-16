"use client";

import Header from "@/components/header";
import Image from "next/image";
import Section2 from "./section-2";

const firstItems = [
  {
    name: "PUMPFUN",
    image: "/assets/about-4/section-1/icon-2.png",
  },
  {
    name: "DEXSCREENER",
    image: "/assets/about-4/section-1/icon-3.png",
  },
  {
    name: "HYPURRFUN",
    image: "/assets/about-4/section-1/icon-4.png",
  },
  {
    name: "ETHERVISTA",
    image: "/assets/about-4/section-1/icon-5.png",
  },
];

const secondItems = [
  {
    name: "DISCORD",
    image: "/assets/about-4/section-1/icon-6.png",
  },
  {
    name: "X",
    image: "/assets/about-4/section-1/icon-7.png",
  },
  {
    name: "BIRDSEYE",
    image: "/assets/about-4/section-1/icon-8.png",
  },
];

export default function Section1() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F0B01] to-[#2E0D19]">
      <div className="bg-[url('/assets/about-4/section-1/bg.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="h-[1400px] w-full overflow-hidden">
          <div>
            <video
              src="/assets/about-4/section-1/bg-video.webm"
              autoPlay
              loop
              muted
              className="h-auto w-full opacity-25"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header />
          <div className="w-full py-16">
            <div className="flex flex-col items-center">
              <div className="mb-8 rounded-full border border-white/25 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/components/header/item-4.png"
                    alt="pen"
                    width={480}
                    height={480}
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-medium text-white/50">
                    PARTNERS
                  </span>
                </div>
              </div>
              <h2
                className="mb-8 text-center text-3xl sm:text-3xl md:text-3xl lg:text-6xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF]"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                BEST IN CLASS <br />
                PARTNERSHIPS
              </h2>
            </div>
          </div>
          <div className="mb-16" data-aos="fade-up" data-aos-delay="1800">
            <div className="mb-8 flex items-center gap-2">
              <p className="text-nowrap text-xl font-normal text-white">
                INCUBATE BY
              </p>
              <div className="h-0.5 w-full bg-white/25"></div>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/5 p-8">
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/assets/about-4/section-1/icon-1.png"
                    alt="logo"
                    width={480}
                    height={480}
                    className="h-12 w-auto"
                  />
                  <p className="text-center text-lg font-medium text-white/75">
                    NVIDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
            <div className="mb-8 flex items-center gap-2">
              <p className="text-nowrap text-xl font-normal text-white">
                EXCHANGE PARTNERS
              </p>
              <div className="h-0.5 w-full bg-white/25"></div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {firstItems?.map((item, index) => (
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3" key={index}>
                  <div className="rounded-2xl border border-white/25 bg-white/5 p-8">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src={item?.image}
                          alt="logo"
                          width={480}
                          height={480}
                          className="h-12 w-auto"
                        />
                        <p className="text-center text-lg font-medium text-white/75">
                          {item?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16" data-aos="fade-up" data-aos-delay="800">
            <div className="mb-8 flex items-center gap-2">
              <p className="text-nowrap text-xl font-normal text-white">
                STRATEGIC PARTNERS
              </p>
              <div className="h-0.5 w-full bg-white/25"></div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {secondItems?.map((item, index) => (
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4" key={index}>
                  <div className="rounded-2xl border border-white/25 bg-white/5 p-8">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src={item?.image}
                          alt="logo"
                          width={480}
                          height={480}
                          className="h-12 w-auto"
                        />
                        <p className="text-center text-lg font-medium text-white/75">
                          {item?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
