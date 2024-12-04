"use client";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import useCharacter from "@/providers/character";

export function VideoDisplay() {
  const { characterId } = useCharacter();
  return (
    <AnimatePresence mode="sync">
      <motion.video
        key={characterId}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        poster={`/hero/poster-${characterId}.png`}
      >
        <source
          src={`/hero/vid-${characterId}.av1.mp4`}
          type="video/mp4; codecs=av01.0.05M.08,opus"
        />
        <source
          src={`/hero/vid-${characterId}.hevc.mp4`}
          type="video/mp4; codecs=hvc1"
        />
        <source
          src={`/hero/vid-${characterId}.h264.mp4`}
          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
        />
      </motion.video>
    </AnimatePresence>
  );
}
