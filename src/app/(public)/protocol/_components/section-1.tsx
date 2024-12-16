"use client";

import Header from "@/components/header";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F0B01] to-[#31100C]">
      <div className="">
        <div className="h-[1080px] w-full overflow-hidden">
          <div className="-mr-[600px] -mt-[200px]">
            <video
              src="/assets/about-2/section-1/bg-video.webm"
              autoPlay
              loop
              muted
              className="h-auto w-full opacity-5"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="container relative mx-auto max-w-6xl px-4">
          <Header />
          <div className="w-full py-16">
            <div className="flex flex-col items-start">
              <div className="mb-8 rounded-full border border-white/25 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/components/header/item-1.png"
                    alt="pen"
                    width={480}
                    height={480}
                    className="h-8 w-auto"
                  />
                  <span className="font-medium text-sm text-white/50">
                    PROTOCOL
                  </span>
                </div>
              </div>
              <h2
                className="mb-8 font-medium text-4xl text-white/75 leading-[1.2] [text-shadow:0px_0px_4px_#FFFFFF] sm:text-4xl md:text-6xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                THE FUSION OF AI
                <br />
                BLOCKCHAIN, AND TRADING
              </h2>
              <p
                className="max-w-[820px] font-normal text-sm text-white/50 text-whitse/50 sm:text-sm md:text-md lg:text-lg"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Artificial Intelligence has emerged as the next frontier in
                human evolution, revolutionizing industries and transforming the
                global tech landscape within mere years. In the realm of
                cryptocurrency, AI is redefining trading by offering
                unparalleled insights, precision, and efficiency.
                <br />
                <br />
                As blockchain technology continues to achieve widespread
                adoption, CryAIstal positions itself at the forefront of
                innovation, seamlessly integrating AI with multiple blockchain
                networks. By leveraging the strengths of leading chains such as
                Solana, Ethereum, and others, CryAIstal offers unparalleled
                scalability, cross-chain compatibility, and advanced trading
                solutions tailored to the dynamic cryptocurrency market.
                <br />
                <br />
                CryAIstal delivers a unified platform that combines predictive
                analytics, real-time market intelligence, and automated
                strategies. It empowers traders and institutions to navigate and
                optimize performance across diverse blockchain ecosystems,
                establishing itself as a revolutionary force in the future of
                cryptocurrency trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
