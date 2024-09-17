import Image from "next/image";
import crossSrc from "./krestic.png";

export function CrossIcons({className}) {
  return <Image className={className} src={crossSrc} alt="" width={20} height={20} unoptimized/>;
}
