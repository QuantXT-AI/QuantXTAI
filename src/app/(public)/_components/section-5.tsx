import { isSafari } from "@/utils/boolean";

export default function Section5() {
  return (
    <section id="tokenomics" className="w-full">
      <div className="container mx-auto w-full max-w-6xl px-4 py-16">
        <div className="flex h-full w-full grid-cols-12 flex-col gap-8 sm:grid md:gap-4">
          <div className="order-last col-span-12 md:order-first md:col-span-6">
            <div className="md:px-12" data-aos="fade-up" data-aos-delay="800">
              <video
                src={`/assets/home/section-5/video.${isSafari ? "mov" : "webm"}`}
                autoPlay
                loop
                muted
                className="h-full w-[260px] sm:w-auto"
                playsInline
                        preload="auto"               

              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex h-full items-center justify-center">
              <div data-aos="fade-right" data-aos-delay="400">
                <h2 className="mb-4 text-start text-4xl font-medium leading-[1.2] text-[#EFCEE3] [text-shadow:0px_0px_4px_#FFFFFF] md:text-6xl">
                  TOKENOMICS
                </h2>
                <p className="text-xs font-normal text-[#EFCEE3] md:text-base">
                  CryAIstal&apos;s tokenomics promote growth <br /> and
                  long-term $CSTAL holding with
                  <br /> ERC-20 and $ETH for liquidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
