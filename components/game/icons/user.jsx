import Image from "next/image";
import UserSrc from './user.png';

export function UserIcon(){
    return (
        <Image src={UserSrc} alt="user" width={24} height={12}/>
    )
}