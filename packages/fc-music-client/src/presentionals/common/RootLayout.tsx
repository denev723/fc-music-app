import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center w-full bg-gray900 min-h-full relative">
      <main className="w-[654px]">{children}</main>
    </div>
  );
}
