import Image from "next/image";
import circleSrc from "./circle.png";

export function CircleIcons({className = ""}) {
  return <Image className={className} src={circleSrc} alt="" width={20} height={20} unoptimized/>;
}
