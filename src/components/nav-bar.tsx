"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div>isDesktop</div>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        Placeholder Link
      </DrawerContent>
    </Drawer>
  );
}
