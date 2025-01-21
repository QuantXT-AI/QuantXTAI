import Loading from "@/components/loading";
import dynamic from "next/dynamic";

const Section1 = dynamic(() => import("./section-1"));
const Section2 = dynamic(() => import("./section-2"));


export default function Container() {
  return (
    <Loading isLoaded={true}>
      <div className="bg-quantxt bg-[length:120%_300%] bg-top">
        <Section1 />
        <Section2 />
      </div>
    </Loading>
  );
}
