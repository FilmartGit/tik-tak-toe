import Link from "next/link";
import { ArrowLeftIcons } from "./icons/arrow-left";
export function BackLink() {
  return (
    <Link href="##" className="flex items-center gap-2 text-xs text-teal-500">
      <ArrowLeftIcons />
      На главную
    </Link>
  );
}
