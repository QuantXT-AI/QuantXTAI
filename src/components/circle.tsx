export default function Circle() {
  return (
    <div className="relative h-screen w-screen bg-[url('/assets/components/circle/bg.png')] bg-contain bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 z-0 mx-auto h-screen w-screen bg-[url('/assets/components/circle/bg-gradient.png')] bg-contain bg-center bg-no-repeat">
        <div className="h-screen w-screen overflow-hidden px-4 py-16">
          <div className="flex h-full items-center justify-center">
            <video
              src="/assets/components/circle/bg-video.webm"
              autoPlay
              loop
              muted
              className="h-[600px] w-auto"
            />
          </div>
        </div>
        <div
          className="absolute left-0 top-0 z-10 h-screen w-screen"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h2 className="px-4 text-center text-2xl font-bold leading-[1.2] text-white/75 [text-shadow:0px_0px_8px_#6D4C5B] md:text-4xl">
              DEMOCRITIZING TRADING, FOR
              <br /> OVER 51,000,000 ACTIVE
              <br />
              CRYPTO TRADERS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
