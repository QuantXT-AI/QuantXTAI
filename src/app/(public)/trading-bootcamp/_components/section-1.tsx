"use client";

import Header from "@/components/header";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F0B01] to-[#330B24]">
      <div className="">
        <div className="h-[1080px] w-full overflow-hidden">
          <div className="-mr-[800px] -mt-[480px]">
            <video
              src="/assets/about-3/section-1/bg-video.webm"
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
            <div className="flex flex-col items-start">
              <div className="mb-8 rounded-full border border-white/25 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/components/header/item-2.png"
                    alt="pen"
                    width={480}
                    height={480}
                    className="h-8 w-auto"
                  />
                  <span className="text-xs font-medium text-white/50 md:text-sm">
                    AI TRADING BOOTCAMP
                  </span>
                </div>
              </div>
              <h2
                className="mb-4 text-4xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] sm:text-4xl md:mb-8 md:text-6xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                CRYPTO TRADING <br />
                REVOLUTION, ONE
                <br />
                AT A TIME
              </h2>
              <p
                className="text-whitse/50 md:text-md max-w-[820px] text-sm font-normal text-white/50 sm:text-sm lg:text-lg"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                The CryAIstal Trading Bootcamp is dedicated to nurturing and
                advancing premier AI-driven cryptocurrency trading solutions,
                integrating them across multiple leading blockchain networks,
                including Solana, Ethereum, and Binance Smart Chain.
                <br />
                <br />
                Partnering with top-tier AI and blockchain innovators, the
                CryAIstal Trading Bootcamp offers an intensive 12-week program
                designed to optimize each trading product for market success.
                The program focuses on refining AI algorithms, enhancing
                multi-chain compatibility, and positioning projects for
                impactful token launches within the crypto ecosystem.
                <br />
                <br />
                Our team conducts a rigorous evaluation of each applicant to
                assess their trading strategies, market penetration, and unique
                value propositions. CryAIstal’s expertise ensures participants
                unlock their full potential, delivering breakthrough solutions
                to the ever-evolving cryptocurrency trading market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
