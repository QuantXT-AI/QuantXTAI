import Loading from "@/components/loading";
import Section1 from "./section-1";
import Section2 from "./section-2";

export default function Container() {
  return (
    <Loading isLoaded={true}>
      <>
        <Section1 />
        <Section2 />
      </>
    </Loading>
  );
}
