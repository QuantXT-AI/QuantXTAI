"use client";

import { cn } from "@/utils/classname";
import Spline from "@splinetool/react-spline";
import { ArrowUpRightIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "usehooks-ts";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";

const navItems = [
  {
    title: "PARTNERS",
    href: "#partners",
  },
  {
    title: "FEATURES",
    href: "#features",
  },
  {
    title: "TOKENOMICS",
    href: "#tokenomics",
  },
  {
    title: "ROADMAP",
    href: "#roadmap",
  },
];

const partnerItems = [
  "/assets/home/section-3/partner-1.png",
  "/assets/home/section-3/partner-2.png",
  "/assets/home/section-3/partner-3.png",
  "/assets/home/section-3/partner-4.png",
  "/assets/home/section-3/partner-5.png",
  "/assets/home/section-3/partner-6.png",
  "/assets/home/section-3/partner-7.png",
  "/assets/home/section-3/partner-8.png",
  "/assets/home/section-3/partner-9.png",
];

export default function Section1() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <section className="relative w-full bg-gradient-to-b from-[rgb(71,22,22)] to-[#200333]">
      {isDesktop ? (
        <>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="h-full w-full overflow-hidden">
              <div>
                <video
                  src="/assets/home/section-1/bg-video.webm"
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-50"
                />
              </div>
              <div>
                <video
                  src="/assets/home/section-1/bg-video.webm"
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-50"
                />
              </div>
              <div>
                <video
                  src="/assets/home/section-1/bg-video-2.webm"
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-25"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/home/section-1/bg-gradient.png')] bg-cover bg-bottom bg-no-repeat">
            <div className="container mx-auto max-w-6xl px-4">
              <Header />
              <div className="h-full w-full pt-16">
                <div className="flex flex-col items-start">
                  <h2
                    className="mb-8 text-start text-6xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF]"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    PRECISION CRYPTO TRADING
                    <br /> REDEFINED BY AI
                  </h2>
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 hover:animate-shake"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                  >
                    <span className="font-clash-display text-sm font-normal text-white">
                      TRY CONSOLE
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" />
                  </Link>
                </div>
                <div className="relative flex h-[800px] flex-col items-center justify-center overflow-hidden">
                  <div className="h-full w-full scale-[150%]">
                    <Spline
                      scene={
                        "https://prod.spline.design/TqM8pKC6mDykToT9/scene.splinecode"
                      }
                      className="!h-[720px] min-h-[720px] !w-full"
                      onLoad={() => setIsLoading(false)}
                    ></Spline>
                  </div>
                  {isLoading && (
                    <div className="absolute left-0 top-0 h-full w-full">
                      <div className="flex h-[800px] w-full items-center justify-center">
                        <LoaderIcon className="h-12 w-12 animate-spin text-white/50" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="container mx-auto -mt-24 max-w-6xl px-4">
              <div className="mb-20">
                <div className="mb-8 flex items-center justify-center gap-4 p-8">
                  {navItems?.map((item, index) => {
                    return (
                      <Link
                        href={item?.href}
                        className="rounded-full border border-white/25 bg-[#46181F]/50 hover:animate-shake"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 400}`}
                        key={index}
                      >
                        <div className="flex items-center">
                          {index === 0 && (
                            <div className="m-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                              <Image
                                src="/assets/home/section-2/nav-icon.png"
                                alt="icon"
                                width={480}
                                height={480}
                                className="h-4 w-4"
                              />
                            </div>
                          )}
                          <p
                            className={cn(
                              "px-8 py-2 text-sm font-normal text-white",
                              index === 0 ? "-ml-4" : "",
                            )}
                          >
                            {item?.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div
                  id="partners"
                  className="flex flex-col items-center justify-center"
                >
                  <h4 className="mb-8 text-center text-2xl font-normal text-white/50 [text-shadow:0px_0px_4px_#FFFFFF]">
                    INCEPTION PARTNER OF
                  </h4>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <Image
                      src="/assets/home/section-3/partner-main.png"
                      alt="logo"
                      width={480}
                      height={480}
                      className="h-24 w-auto opacity-75"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="py-8">
                  <Marquee className="">
                    <div className="flex items-center justify-center gap-4">
                      {[...partnerItems, ...partnerItems].map((item, index) => {
                        return (
                          <div className="px-8" key={index}>
                            <Image
                              src={item}
                              alt="logo"
                              width={480}
                              height={480}
                              className="h-8 w-auto opacity-50"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Marquee>
                </div>
                <h2
                  className="my-24 text-center text-5xl font-medium text-white/75 [text-shadow:0px_0px_4px_#FFFFFF]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  CRYAISTAL STREAMLINED
                  <br /> PLATFORM CONNECTS USER TO
                  <br /> THE WHOLE ESSENSE THE
                  <br /> CRYPTO ECONOMY
                </h2>
                <div className="py-8">
                  <Marquee direction="right">
                    <div className="flex items-center justify-center gap-4">
                      {[...partnerItems, ...partnerItems].map((item, index) => {
                        return (
                          <div className="px-8" key={index}>
                            <Image
                              src={item}
                              alt="logo"
                              width={480}
                              height={480}
                              className="h-8 w-auto opacity-50"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <video
            src="/assets/home/section-1/bg-video.webm"
            autoPlay
            loop
            muted
            className="absolute h-[100vh] w-full bg-no-repeat object-cover opacity-50"
          />
          <div className="relative">
            <div className="px-4">
              <Header />
              <h2
                className="mb-8 text-start text-2xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] md:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                PRECISION CRYPTO TRADING
                <br /> REDEFINED BY AI
              </h2>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 hover:animate-shake md:justify-start"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <span className="font-clash-display text-sm font-normal text-white">
                  TRY CONSOLE
                </span>
                <ArrowUpRightIcon className="h-4 w-4 text-white" />
              </Link>
            </div>

            <Spline
              scene={
                "https://prod.spline.design/TqM8pKC6mDykToT9/scene.splinecode"
              }
              className="!h-[550px] min-h-[550px] !w-full"
              onLoad={() => setIsLoading(false)}
            ></Spline>
            <div
              id="partners"
              className="flex flex-col items-center justify-center"
            >
              <h4 className="mb-8 text-center text-xl font-normal text-white/50 [text-shadow:0px_0px_4px_#FFFFFF] md:text-2xl">
                INCEPTION PARTNER OF
              </h4>
              <div data-aos="zoom-in" data-aos-delay="400">
                <Image
                  src="/assets/home/section-3/partner-main.png"
                  alt="logo"
                  width={480}
                  height={480}
                  className="h-16 w-auto opacity-75 md:h-24"
                />
              </div>
            </div>
            <div className="py-8">
              <Marquee direction="right">
                <div className="flex items-center justify-center gap-4">
                  {[...partnerItems, ...partnerItems].map((item, index) => {
                    return (
                      <div className="px-8" key={index}>
                        <Image
                          src={item}
                          alt="logo"
                          width={480}
                          height={480}
                          className="h-8 w-auto opacity-50"
                        />
                      </div>
                    );
                  })}
                </div>
              </Marquee>
            </div>
            <h2
              className="px-4 py-10 text-center text-2xl font-medium text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] md:text-4xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              CRYAISTAL STREAMLINED PLATFORM CONNECTS USER TO THE WHOLE ESSENSE
              THE CRYPTO ECONOMY
            </h2>
          </div>
        </>
      )}
    </section>
  );
}
