"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import NavbarListItem from "./nav-bar-list-item";
import { usePathname, useRouter } from 'next/navigation';


export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const pathname = usePathname();

  const navDict = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/game", text: "Game (WIP)" },
    // { href: "/data", text: "Data Science" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="relative">
      {isDesktop ? (
        <ul className="flex flex-row justify-end gap-8 pr-16 pt-1">
            {navDict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} isActive={pathname === href} />
            ))}
        </ul>
      ) : (
        <Drawer direction="right">
          <DrawerTrigger className="focus:outline-none absolute right-0 top-0 p-4">
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="focus:outline-none">
            <DrawerTrigger className="absolute right-0 top-0 p-4">
              <XIcon />
            </DrawerTrigger>
            <ul className="pt-14 flex flex-col gap-6">
            {navDict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} isActive={pathname === href} isMobileMenu={true} />
            ))}
        </ul>
          </DrawerContent>
        </Drawer>
      )}
    </nav>
  );
}
