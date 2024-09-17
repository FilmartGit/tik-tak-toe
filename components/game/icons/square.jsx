import Image from "next/image";
import squareSrc from './square.png';

export function SquareIcon({className}){
    return <Image className={className} src={squareSrc} alt="" width={20} height={20} />
}