import dynamic from "next/dynamic";

const Circle = dynamic(() => import("@/components/circle"));

export default function Section2() {
  return (
    <section className="w-full pt-4">
      <Circle />
    </section>
  );
}
