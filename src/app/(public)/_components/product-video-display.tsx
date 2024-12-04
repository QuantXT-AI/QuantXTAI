"use client";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

export function ProductVideoDisplay({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <AnimatePresence mode="sync">
      <motion.video
        key={name}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        autoPlay
        muted
        playsInline
        loop
        className={cn(
          "absolute top-0 left-0 z-0 h-full w-full object-cover",
          className,
        )}
        poster={`/products/poster-${name}.png`}
      >
        <source
          src={`/products/vid-${name}.av1.mp4`}
          type="video/mp4; codecs=av01.0.05M.08,opus"
        />
        <source
          src={`/products/vid-${name}.hevc.mp4`}
          type="video/mp4; codecs=hvc1"
        />
        <source
          src={`/products/vid-${name}.h264.mp4`}
          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
        />
      </motion.video>
    </AnimatePresence>
  );
}
