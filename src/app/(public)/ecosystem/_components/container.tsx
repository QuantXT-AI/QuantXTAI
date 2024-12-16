import dynamic from "next/dynamic";
import Section2 from "./section-2";
import Section3 from "./section-3";

interface ContainerProps {
  config: {
    x_dev_url: string;
    x_coin_url: string;
    pump_fun_url: string;
    x_user_id: string;
    drive_file_id: string;
  };
}

const Section1 = dynamic(() => import("./section-1"));
export default function Container({ config }: ContainerProps) {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
