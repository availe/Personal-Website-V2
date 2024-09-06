"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import NavbarListItem from "./nav-bar-list-item";
import { usePathname, useRouter } from 'next/navigation';


export default function NavBar() {
  const pathname = usePathname();

  const navDict = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/work", text: "Work" },
    { href: "/projects", text: "Projects" },
  ];

  return (
    <header className="md:fixed top-0 md:w-full md:bg-white z-10 md:p-2">
    <nav className="relative">
    <ul className="hidden md:flex flex-row justify-start pr-16 pt-1">
      {navDict.map(({ href, text }, index) => (
        <NavbarListItem key={index} href={href} text={text} />
      ))}
    </ul>
    <div className="md:hidden">
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
              <NavbarListItem key={index} href={href} text={text} />
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  </nav>
  </header>
  );
}
