import Image from "next/image";
import TriangleSrc from "./triangle.png";

export function TriangleIcon({className}) {
  return <Image className={className} src={TriangleSrc} width={20} height={20} alt="" unoptimized />;
}
