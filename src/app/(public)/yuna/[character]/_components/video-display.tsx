"use client";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function VideoDisplay({ character }: { character: string }) {
  const [introEnded, setIntroEnded] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIntroEnded(false);
  }, [character]);

  return (
    <>
      <video
        key={`loop-${character}`}
        autoPlay
        muted
        playsInline
        loop
        className={cn(
          "absolute top-0 z-0 h-full w-full origin-top-left scale-[1.2] object-cover md:origin-top-right",
          !introEnded && "sr-only",
        )}
        poster={`/chat/poster-${character}.png`}
      >
        <source src={`/chat/loop-vid-${character}.mp4`} type="video/mp4;" />
      </video>
      <AnimatePresence mode="sync">
        {!introEnded && (
          <motion.video
            key={`intro-${character}`}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            autoPlay
            muted
            playsInline
            onEnded={() => setIntroEnded(true)}
            className="absolute top-0 z-0 h-full w-full origin-top-left scale-[1.2] object-cover md:origin-top-right"
            poster={`/chat/poster-${character}.png`}
          >
            <source
              src={`/chat/vid-${character}.av1.mp4`}
              type="video/mp4; codecs=av01.0.05M.08,opus"
            />
            <source
              src={`/chat/vid-${character}.hevc.mp4`}
              type="video/mp4; codecs=hvc1"
            />
            <source
              src={`/chat/vid-${character}.h264.mp4`}
              type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
            />
          </motion.video>
        )}
      </AnimatePresence>
    </>
  );
}
