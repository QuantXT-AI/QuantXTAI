"use client";

import Header from "@/components/header";
import Image from "next/image";
import Section2 from "./section-2";

export default function Section1() {
  return (
    <section className="relative w-full bg-cryaistal bg-[length:120%_300%] bg-top">
      <div className="">
        <div className="absolute bottom-0 top-0 w-full overflow-hidden">
          <div className="-mr-[600px] -mt-[200px]">
            <video
              src="/assets/about-2/section-1/bg-video.webm"
              autoPlay
              loop
              muted
              className="h-auto w-full opacity-5"
              playsInline
            />
          </div>
        </div>
      </div>
      <div className=" h-full w-full">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header />
          <div className="w-full py-16">
            <div className="mb-8 flex flex-col items-start">
              <div className="mb-8 rounded-full border border-white/25 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/components/header/item-1.png"
                    alt="pen"
                    width={480}
                    height={480}
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-medium text-white/50">
                    FOUNDATION
                  </span>
                </div>
              </div>
              <h2
                className="mb-8 text-4xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] sm:text-4xl md:text-6xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                The Fusion Of AI
                <br />
                Blockchain, And Trading
              </h2>
              <p
                className="text-whitse/50 md:text-md max-w-[820px] text-sm font-normal text-white/50 sm:text-sm lg:text-lg"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Artificial intelligence has become the next evolutionary step for humanity,
                reshaping industries and redefining possibilities in just a few short years.
                In the cryptocurrency space, AI takes trading to unprecedented heights, delivering insights, precision,
                and efficiency that were once unimaginable.
                <br />
                <br />
                CryAIstal sits at the intersection of this transformation, pioneering the integration of AI with blockchain technology.
                As blockchain adoption continues to grow, CryAIstal leverages the strengths of industry-leading networks
                such as Solana and Ethereum, offering traders unmatched scalability, cross-chain compatibility, and
                sophisticated trading solutions.
              </p>
              <h2
                className="mt-10 mb-8 text-4xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] sm:text-4xl md:text-6xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                A Unified Platform
                <br />
                for Revolutionary Trading
              </h2>
              <p
                className="text-whitse/50 md:text-md max-w-[820px] text-sm font-normal text-white/50 sm:text-sm lg:text-lg"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                CryAIstal unites cutting-edge tools like predictive analytics,
                real-time market intelligence, and automated strategies into a single platform.
                By doing so, it empowers individual traders and institutions alike to navigate the
                complexities of the crypto market with ease, optimizing performance across diverse
                ecosystems.
              </p>
              <h2
                className="mt-10 mb-8 text-4xl font-medium leading-[1.2] text-white/75 [text-shadow:0px_0px_4px_#FFFFFF] sm:text-4xl md:text-6xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Democratizing Trading
                <br />
                for a Global Community
              </h2>
              <p
                className="text-whitse/50 md:text-md max-w-[820px] text-sm font-normal text-white/50 sm:text-sm lg:text-lg"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                With over 51 million active crypto traders worldwide,
                CryAIstal is more than a platformit’s a movement. By providing tools
                that were once reserved for elite institutions, CryAIstal opens the door
                for anyone to participate in the ever-evolving world of cryptocurrency trading.
                <br />
                <br />
                CryAIstal isn’t just keeping pace with the future of cryptoit’s shaping it
              </p>
            </div>
          </div>
        </div>
        <Section2 />
      </div>
    </section>
  );
}
