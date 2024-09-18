import Image from "next/image";
import logoSrc from "./logotype.jpg";
import avatarSrc from "./icons8-women-48.png";
import arrowSrc from "./arrow.png";
import { Profile } from "../profile/profile";
import { UIButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="h-20 bg-white flex items-center px-8 shadow-lg">
      <Image src={logoSrc} alt="logotype" width={100} height={60} />
      <div className="w-px h-8 bg-slate-300 ml-6 mr-6"></div>
      <UIButton className="w-44" size={"lg"} variant={"primary"}>
        Играть
      </UIButton>
      <button className="ml-auto flex items-center">
        <Profile avatar={avatarSrc} name="GamePlayer" rating="1200"/>
        <Image src={arrowSrc} alt="#"></Image>
      </button>
    </header>
  );
}
