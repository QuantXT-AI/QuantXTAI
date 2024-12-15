"use client";

import Image from "next/image";

export function Loader() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/placeholder.svg"
          alt="Footer Background"
          width={323}
          height={375}
        />
      </div>
    </div>
  );
}
