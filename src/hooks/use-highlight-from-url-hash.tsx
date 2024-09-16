"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useHighlightOnScroll from "./use-highlight-on-scroll";

function useHighlightFromUrlHash(
  highlightClass: string = "highlighted",
  duration: number = 2000
) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      useHighlightOnScroll(hash, highlightClass, duration);
    }
  }, [pathname, searchParams, highlightClass, duration]);
}

export default useHighlightFromUrlHash;
