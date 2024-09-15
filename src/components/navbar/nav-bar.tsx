"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import NavbarListItem from "./nav-bar-list-item";
import NavbarSocialListItem from "./nav-bar-social-list-item";
import { useState } from "react";
import { navDict, socialDict } from "@/data/txt/nav-data";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => setIsOpen(false);

  return (
    <header className="sticky top-0 right-0 w-full md:bg-white z-10 md:p-2">
      <nav className="relative">
        <div className="flex justify-between">
          <ul className="hidden md:flex flex-row justify-start pr-16 pt-1">
            {navDict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} />
            ))}
          </ul>
          <ul className="hidden md:flex gap-6 pr-10">
            {socialDict.map(({ href, icon, label }, index) => (
              <NavbarSocialListItem
                key={index}
                href={href}
                icon={icon}
                label={label}
              />
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="focus:outline-none absolute right-0 top-0 p-4">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className="focus:outline-none">
              <DrawerTrigger className="absolute right-0 top-0 p-4">
                <XIcon />
              </DrawerTrigger>
              <ul className="pt-14 flex flex-col gap-6">
                {navDict.map(({ href, text }, index) => (
                  <NavbarListItem
                    key={index}
                    href={href}
                    text={text}
                    onItemClick={closeDrawer}
                  />
                ))}
                {socialDict.map(({ href, icon, label }, index) => (
                  <NavbarSocialListItem
                    key={index}
                    href={href}
                    icon={icon}
                    label={label}
                    onItemClick={closeDrawer}
                  />
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
