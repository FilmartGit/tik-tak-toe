import Image from "next/image";
import StarSrc from './star.png';

export function StarIcon(){
    return (
        <Image src={StarSrc} alt="" width={24} height={12}/>
    )
}