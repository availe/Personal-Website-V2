"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <nav className="relative">
      {isDesktop ? (
        <ul>
          <li>Placeholder Link</li>
        </ul>
      ) : (
        <Drawer direction="right">
          <DrawerTrigger className="focus:outline-none absolute right-0 top-0 p-4">
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="focus:outline-none">
            Placeholder Link
          </DrawerContent>
        </Drawer>
      )}
    </nav>
  );
}
