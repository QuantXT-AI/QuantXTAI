"use client";

import { cn } from "@/utils/classname";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

interface LoadingProps {
  children: React.ReactNode;
  isLoaded: boolean;
}

const Loading = ({ children, isLoaded }: LoadingProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return prev;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed z-50 h-screen w-screen bg-[#2D0B1B] bg-[url('/assets/components/loading/bg.png')] bg-cover bg-center ${progress >= 80 ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex h-full w-full items-center justify-center">
            <div className="w-full px-8">
              <div className="mb-8 flex items-center justify-center">
                <Image
                  src="/assets/components/loading/circle.png"
                  alt=""
                  width={480}
                  height={480}
                  className="-ml-8 h-auto w-9 animate-spin"
                />
              </div>
              <div className="w-full">
                <div className="h-1 w-full rounded-full bg-[#FFB68C] opacity-50 shadow-[0_0_4px_#FFB68C]" />
                <div
                  className={cn("-mt-[26px] flex justify-end transition-none")}
                  style={{ width: `${progress}%` }}
                >
                  <Image
                    src="/assets/components/loading/line.png"
                    alt=""
                    width={480}
                    height={480}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center py-4">
                <p className="text-lg font-bold text-white opacity-75 [text-shadow:0px_0px_4px_#FFFFFF]">
                  LOADING... {progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loading;
