import Loading from "@/components/loading";
import Section1 from "./section-1";

export default function Container() {
  return (
    <Loading isLoaded={true}>
      <Section1 />
    </Loading>
  );
}
