"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
  }, []);

  return <></>;
}
