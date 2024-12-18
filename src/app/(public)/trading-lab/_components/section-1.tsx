"use client";

import Header from "@/components/header";
import Image from "next/image";
import Section2 from "./section-2";

export default function Section1() {
  return (
    <section className="relative w-full bg-cryaistal bg-[length:120%_300%] bg-top">
      <div className="">
        <div className="absolute bottom-0 top-0 w-full overflow-hidden">
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
      <div className="h-full w-full">
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
                    AI TRADING LAB
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
                The CryAIstal Trading Forge is where innovation meets strategy,
                crafting cutting-edge AI-driven trading solutions across top blockchain
                networks like Solana, Ethereum, hyperliquid, and Binance Smart Chain.
                <br />
                <br />
                <b>Empowering Visionaries</b>
                <br />
                The Forge helps refine, test, and launch groundbreaking projects by focusing on:
                <br />
                <ul className="list-disc ml-14">
                  <li>Algorithm Precision: Sharpen AI strategies for volatile markets.</li>
                  <li>Multi-Chain Integration: Seamless compatibility across ecosystems.</li>
                  <li>Market Readiness: Tailored tools for impactful token launches.</li>
                </ul>
                <br />
                <b>Rigorous Standards</b>
                <br />
                Projects are evaluated on trading strategies, scalability, and unique value propositions,
                ensuring they stand out in a dynamic crypto landscape.
                <br />
                <br />
                CryAIstal’s Trading Forge isn’t just a platform, it’s the future of AI-powered crypto trading.
              </p>
            </div>
          </div>
        </div>
        <Section2 />
      </div>
    </section>
  );
}
