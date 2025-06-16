import { PropsWithChildren } from "react";

export default function PlayerWrapper({ children }: PropsWithChildren) {
  return (
    <div className="fixed inset-x-0 w-full bottom-0 bg-black text-white">
      {children}
    </div>
  );
}
