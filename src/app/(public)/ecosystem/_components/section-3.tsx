
import dynamic from "next/dynamic";

const Circle = dynamic(() => import("@/components/circle"));

export default function Section3() {
  return (
    <section className="w-full">
      <Circle />
    </section>
  );
}
 