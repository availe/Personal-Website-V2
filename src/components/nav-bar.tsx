"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export default function NavBar() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return isDesktop ? <div>isDesktop</div> : <div>isMobile</div>;
}