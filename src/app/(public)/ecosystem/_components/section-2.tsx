"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export default function Section2() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const overlayRobot = (children: React.ReactNode) =>
    isDesktop ? (
      <div className="bg-gradient-to-b from-[#190616] to-[rgba(0,0,0,0)]">
        {children}
      </div>
    ) : (
      children
    );

  return (
    <section className="w-full">
      {overlayRobot(
        <div className="container mx-auto h-full w-full max-w-6xl px-4 py-0 pt-16 md:py-16 md:pt-0">
          <h2
            className="mb-8 pt-16 text-center text-2xl font-medium leading-[1.2] text-[#F8E6EE]/75 [text-shadow:0px_0px_4px_#F8E6EE] sm:mb-16 sm:text-4xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            SCALING AI AND TRADING INTEGRATION
            <br />
            WITH SEAMLESS PRECISION
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div
                className="h-full w-full rounded-2xl border border-white/25 bg-white/5 p-8"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="flex flex-col items-start">
                  <h4 className="mb-2 font-epilogue text-xl font-medium text-white md:text-2xl">
                    01
                  </h4>
                  <h2 className="mb-2 text-3xl font-medium text-white md:text-4xl">
                    NVIDIA PARTNERSHIP
                  </h2>
                  <p className="text-md mb-8 font-epilogue text-white/75 md:mb-16 md:text-lg">
                    Building on our experience with Nvidia's Inception Program.
                    we refine AI integration and ecosystem optimization.
                  </p>
                  <Link
                    href="https://docs.cryaistal.ai/nvidia-inception"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 hover:animate-shake md:px-8 md:py-4"
                  >
                    <span className="font-clash-display text-sm font-normal text-white">
                      LEARN MORE
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div
                className="h-full w-full rounded-2xl border border-white/25 bg-white/5 p-8"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <div className="flex flex-col items-start">
                  <h4 className="mb-2 font-epilogue text-xl font-medium text-white md:text-2xl">
                    02
                  </h4>
                  <h2 className="mb-2 text-3xl font-medium text-white md:text-4xl">
                    AI16Z (ELIZA) INPUT
                  </h2>
                  <p className="text-md mb-8 font-epilogue text-white/75 md:mb-16 md:text-lg">
                    Using Eliza’s tech, we scrape twitter API and also
                    automatically curate discord alpha group informations.
                  </p>
                  <Link
                    href="https://docs.cryaistal.ai/elizas-fusion-ai16z"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 hover:animate-shake md:px-8 md:py-4"
                  >
                    <span className="font-clash-display text-sm font-normal text-white">
                      LEARN MORE
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>,
      )}
    </section>
  );
}
