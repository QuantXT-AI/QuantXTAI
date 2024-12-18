"use client";

import Image from "next/image";

export default function Section6() {
  return (
    <section id="roadmap" className="w-full">
      <div className="h-full w-full bg-[url('/assets/home/section-6/bg-gradient.png')] bg-contain bg-bottom bg-no-repeat">
        <div className="container mx-auto w-full max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="mb-4 block text-start text-5xl font-medium leading-[1.2] text-[#EFCEE3] [text-shadow:0px_0px_4px_#FFFFFF] md:hidden md:text-6xl">
                ROADMAP
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div
                className="col-span-12 md:col-span-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="relative">
                  <Image
                    src="/assets/home/section-6/card.png"
                    alt="roadmap"
                    width={480}
                    height={480}
                    className="h-[400px] w-auto opacity-30"
                    priority
                  />
                  <div className="absolute left-5 top-24 w-[calc(100%-54px)] sm:w-[260px] md:left-12">
                    <h4 className="mb-4 text-2xl font-semibold text-[#EBBED6]">
                      Q3 2024
                    </h4>
                    <ul className="list-disc pl-4 text-xs font-normal text-white/50">
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Platform beta testing done in Q2 2024
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Enabling seamless creator and backer collaboration
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Adaptive neutal personality
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-6"
                data-aos="fade-left"
                data-aos-delay="800"
              >
                <div className="relative -mb-24">
                  <Image
                    src="/assets/home/section-6/card.png"
                    alt="roadmap"
                    width={480}
                    height={480}
                    className="h-[560px] w-auto opacity-30"
                    priority
                  />
                  <div className="absolute left-5 top-28 w-[calc(100%-54px)] sm:w-[320px] md:left-12">
                    <h4 className="mb-4 text-2xl font-semibold text-[#EBBED6]">
                      Q4 2024
                    </h4>
                    <ul className="list-disc pl-4 text-xs font-normal text-white/50">
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Advanced market intelligence curated by elite traders
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Fumble and REKT quantification engine
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Comprehensive past trade activity analysis
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Advanced Ticker search with aggregated insights (
                          discords, telegram, x)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 hidden text-start text-5xl font-medium leading-[1.2] text-[#EFCEE3] [text-shadow:0px_0px_4px_#FFFFFF] md:block md:text-6xl">
                ROADMAP
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div
                className="col-span-12 md:col-span-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="relative">
                  <Image
                    src="/assets/home/section-6/card.png"
                    alt="roadmap"
                    width={480}
                    height={480}
                    className="h-[480px] w-auto opacity-30"
                    priority
                  />
                  <div className="absolute left-5 top-28 w-[calc(100%-54px)] sm:w-[300px] md:left-12">
                    <h4 className="mb-4 text-2xl font-semibold text-[#EBBED6]">
                      Q2 2024
                    </h4>
                    <ul className="list-disc pl-4 text-xs font-normal text-white/50">
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Offline events for brand recognition
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Fully autonomous trading option by studying pattern
                          during Q1 2025
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Full trader ecosystem, collab with exchanges and
                          platform to incentivize traders
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="order-first col-span-12 md:order-last md:col-span-6"
                data-aos="fade-left"
                data-aos-delay="800"
              >
                <div className="relative -mt-16 md:-ml-16">
                  <Image
                    src="/assets/home/section-6/card.png"
                    alt="roadmap"
                    width={480}
                    height={480}
                    priority
                    className="h-[480px] w-auto opacity-30"
                  />
                  <div className="absolute left-5 top-28 w-[calc(100%-54px)] sm:w-[280px] md:left-12">
                    <h4 className="mb-4 text-2xl font-semibold text-[#EBBED6]">
                      Q1 2024
                    </h4>
                    <ul className="list-disc pl-4 text-xs font-normal text-white/50">
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Expanding scope of memecoins to BASE Chain
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Chart insights to determine
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Concrete patterns and entry/exit points
                        </p>
                      </li>
                      <li>
                        <p className="mb-2 text-sm md:text-base">
                          Fully automatic trading for memecoin and altcoin,
                          studying best 100 peforming wallets
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
