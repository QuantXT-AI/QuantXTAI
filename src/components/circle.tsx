import { isSafari } from "@/utils/boolean";

export default function Circle() {
  return (
    <div className="relative h-screen w-screen bg-[url('/assets/components/circle/bg.png')] bg-center bg-contain bg-no-repeat">
      <div className="absolute top-0 left-0 z-0 mx-auto h-screen w-screen bg-[url('/assets/components/circle/bg-gradient.png')] bg-center bg-contain bg-no-repeat">
        <div className="h-screen w-screen overflow-hidden px-4 py-16">
          <div className="flex h-full items-center justify-center">
            <video
              src={`/assets/components/circle/video-bg.${isSafari ? "mov" : "webm"}`}
              autoPlay
              loop
              muted
              className="h-[600px] w-auto"
              playsInline
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 z-10 h-screen w-screen"
        >
          <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h2
              className="px-4 text-center font-bold text-2xl text-white/75 leading-[1.2] [text-shadow:0px_0px_8px_#6D4C5B] md:text-4xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
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
