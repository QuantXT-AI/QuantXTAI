"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
    const pathname = usePathname();
    const isQuanXT = pathname.includes("/quantxt-agent");

    if (isQuanXT) {
        return children;
    }

    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
