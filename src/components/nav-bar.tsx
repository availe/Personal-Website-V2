"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Link, MenuIcon, XIcon } from "lucide-react";
import NavbarListItem from "./nav-bar-list-item";
import { usePathname, useRouter } from "next/navigation";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function NavBar() {
  const pathname = usePathname();

  const navDict = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/resume", text: "Resume" },
  ];

  return (
    <header className="fixed top-0 right-0 w-full md:bg-white z-10 md:p-2">
      <nav className="relative">
        <div className="flex justify-between">
          <ul className="hidden md:flex flex-row justify-start pr-16 pt-1">
            {navDict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} />
            ))}
          </ul>
          <ul className="hidden md:flex gap-6 pr-10">
            <a href="https://www.linkedin.com/in/rafael-diaz1/" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/availe" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
          </ul>
        </div>
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
