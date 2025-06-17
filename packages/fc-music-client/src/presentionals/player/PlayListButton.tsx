import { ButtonHTMLAttributes } from "react";
import PlayListIcon from "@/assets/icons/menu.svg?react";
import { tw } from "@/twMerge";

export default function PlayListButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={tw(className)}>
      <PlayListIcon />
    </button>
  );
}
