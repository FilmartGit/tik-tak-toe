import Image from "next/image";
import circleSrc from "./circle.png";

export function CircleIcons() {
  return <Image src={circleSrc} alt="" width={20} height={20} unoptimized/>;
}
