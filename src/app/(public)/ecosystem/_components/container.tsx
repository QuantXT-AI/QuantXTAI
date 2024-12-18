import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Section2 from "./section-2";
import Section3 from "./section-3";

const Section1 = dynamic(() => import("./section-1"));

export default function Container() {
  return (
    <Loading isLoaded={true}>
      <>
        <Section1 />
        <Section2 />
        <Section3 />
      </>
    </Loading>
  );
}
