import Image from "next/image";
import TimeSrc from './time.png';

export function TimeIcon(){
    return (
        <Image src={TimeSrc} alt="" width={24} height={12}/>
    )
}