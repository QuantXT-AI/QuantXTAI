export default function Section5() {
  return (
    <section
      id="tokenomics"
      className="w-full bg-gradient-to-b from-[#2A0A20] to-[#330A2E]"
    >
      <div className="container mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid h-full w-full grid-cols-12 gap-8 md:gap-4">
          <div className="order-last col-span-12 md:order-first md:col-span-6">
            <div
              className="px-4 md:px-12"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <video
                src="/assets/home/section-5/video.webm"
                autoPlay
                loop
                muted
                className="h-full w-auto"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex h-full items-center justify-center">
              <div data-aos="fade-right" data-aos-delay="400">
                <h2 className="mb-4 text-start text-5xl font-medium leading-[1.2] text-[#EFCEE3] [text-shadow:0px_0px_4px_#FFFFFF] md:text-6xl">
                  TOKENOMICS
                </h2>
                <p className="text-sm font-normal text-[#EFCEE3] md:text-base">
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
