"use client";

import Header from "@/components/header";
import { cn } from "@/utils/classname";
import Spline from "@splinetool/react-spline";
import { ArrowUpRightIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { isSafari } from "@/utils/boolean";

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
  "/assets/home/section-3/partner-10.png",
];

interface Section1Props {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export default function Section1({ isLoading, setIsLoading }: Section1Props) {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop >= 950);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full">
      {isDesktop ? (
        <>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="h-full w-full overflow-hidden">
              <div>
                <video
                  src={`/assets/home/section-1/bg-video.${isSafari ? "mov" : "webm"}`}
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-50"
                  playsInline
                  preload="auto"
                />
              </div>
              <div>
                <video
                  src={`/assets/home/section-1/bg-video.${isSafari ? "mov" : "webm"}`}
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-50"
                  playsInline
                  preload="auto"
                />
              </div>
              <div>
                <video
                  src="/assets/home/section-1/bg-video-2.webm"
                  autoPlay
                  loop
                  muted
                  className="-mt-8 h-auto w-full object-cover object-bottom opacity-25"
                  playsInline
                  preload="auto"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/home/section-1/bg.png')] bg-cover bg-bottom bg-no-repeat">
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
                    href="/quantxt-agent"
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 hover:animate-shake"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                  >
                    <span className="font-clash-display text-sm font-normal text-white">
                      TRY QUANTXT
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
                <motion.div
                  className={cn(
                    "fixed left-0 right-0 top-0 z-40 opacity-100 transition-all duration-1000",
                    !isSticky ? "-top-[200px] opacity-0" : "top-0 opacity-100",
                  )}
                >
                  <div
                    className={cn(
                      "duration-8000 mb-8 flex items-center justify-center gap-4 p-8 transition-all",
                    )}
                  >
                    {navItems?.map((item, index) => {
                      return (
                        <Link
                          href={item?.href}
                          className="rounded-full border border-white/25 bg-[#46181F]/50 hover:animate-shake"
                          data-aos="fade-up"
                          data-aos-delay={`${index * 200}`}
                          key={index}
                        >
                          <div className="flex items-center">
                            <p
                              className={cn(
                                "px-8 py-2 text-sm font-normal text-white",
                                {},
                              )}
                            >
                              {item?.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
                <div
                  className="flex flex-col items-center justify-center relative"
                >
                  <div id="partners" className="absolute -top-28"></div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mb-8 text-center text-2xl font-normal text-white/50 [text-shadow:0px_0px_4px_#FFFFFF]"
                  >
                    INCEPTION PARTNER OF
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <Image
                      src="/assets/home/section-3/partner-main.png"
                      alt="logo"
                      width={480}
                      height={480}
                      className="h-24 w-auto opacity-75"
                      priority
                    />
                  </div>
                </div>
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-16">
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
                              priority
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Marquee>
                </div>
              </div>
              <div>
                <h2
                  className="absolute bottom-[200px] left-0 right-0 text-center text-5xl font-medium text-white/75 [text-shadow:0px_0px_4px_#FFFFFF]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  QUANTXT STREAMLINED
                  <br /> PLATFORM CONNECTS USER TO
                  <br /> THE WHOLE ESSENSE THE
                  <br /> CRYPTO ECONOMY
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <video
            src={`/assets/home/section-1/bg-video.${isSafari ? "mov" : "webm"}`}
            autoPlay
            loop
            muted
            className="absolute h-[100vh] w-full bg-no-repeat object-cover opacity-50"
            playsInline
            preload="auto"
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
                href="/quantxt-agent"
                className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 hover:animate-shake md:justify-start"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <span className="font-clash-display text-sm font-normal text-white">
                  TRY QUANTXT
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
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mb-8 text-center text-2xl font-normal text-white/50 [text-shadow:0px_0px_4px_#FFFFFF]"
              >
                INCEPTION PARTNER OF
              </div>
              <div data-aos="zoom-in" data-aos-delay="200">
                <Image
                  src="/assets/home/section-3/partner-main.png"
                  alt="logo"
                  width={480}
                  height={480}
                  className="h-16 w-auto opacity-75 md:h-24"
                  priority
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
                          priority
                        />
                      </div>
                    );
                  })}
                </div>
              </Marquee>
            </div>
            <h2
              className="flex h-screen items-center justify-center px-4 py-10 text-center text-2xl font-medium text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] md:text-4xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              QUANTXT STREAMLINED PLATFORM CONNECTS USER TO THE WHOLE ESSENSE
              THE CRYPTO ECONOMY
            </h2>
          </div>
        </>
      )}
    </section>
  );
}
