import { tw } from "@/twMerge";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import ArrowIcon from "@/assets/icons/play_arrow.svg?react";

const MenuContext = createContext<{
  openSubmenuKey: string | null;
  onChangeOpenSubmenuKey: (openSubmenuKey: string | null) => void;
  onClose: () => void;
}>({
  openSubmenuKey: null,
  onChangeOpenSubmenuKey: () => {},
  onClose: () => {},
});

function Menu({
  children,
  className,
  onClose,
}: Cn<PropsWithChildren<{ onClose: () => void }>>) {
  const [openSubmenuKey, setOpenSubmenuKey] = useState<string | null>(null);

  const handleClose = () => {
    setOpenSubmenuKey(null);
    onClose();
  };

  return (
    <MenuContext.Provider
      value={{
        openSubmenuKey,
        onChangeOpenSubmenuKey: setOpenSubmenuKey,
        onClose: handleClose,
      }}
    >
      <div
        className={tw(
          "absolute left-0 right-0 bg-gray600 border-2 border-[#d9d9d9]",
          className
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function MenuItem({
  children,
  label,
  value,
  onSelect,
}: PropsWithChildren<{
  label: ReactNode;
  value: string;
  onSelect?: (value: string) => void;
}>) {
  const { openSubmenuKey, onChangeOpenSubmenuKey, onClose } =
    useContext(MenuContext);
  const handleClick = () => {
    onSelect?.(value);
    if (children) {
      onChangeOpenSubmenuKey(openSubmenuKey === value ? null : value);
    } else {
      onClose();
    }
  };

  return (
    <div className="w-[255px] relative">
      <button className="w-full p-8 text-left" onClick={handleClick}>
        {label}
        {children && <ArrowIcon className="absolute top-8 right-7" />}
      </button>
      {!!children && openSubmenuKey === value && children}
    </div>
  );
}

function Submenu({ children }: PropsWithChildren) {
  return (
    <div className="relative h-0 w-full">
      <div className="absolute right-full -top-13 bg-gray600 border-2 border-[#d9d9d9]">
        {children}
      </div>
    </div>
  );
}

Menu.MenuItem = MenuItem;
Menu.Submenu = Submenu;

export default Menu;
