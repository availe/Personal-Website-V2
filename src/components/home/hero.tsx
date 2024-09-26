"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

const Hero = () => {
  const [heightClass, setHeightClass] = useState("min-h-[85svh]");

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    const isLinkedInApp = result.ua.includes("LinkedIn");
    if (isLinkedInApp) {
      setHeightClass("min-h-[600px]");
    }
  }, []);

  return (
    <main
      className={`${heightClass} bg-[url('/flat-mountains.svg')] bg-cover bg-center flex flex-col justify-center`}
    >
      <section className="text-center flex flex-col gap-6 md:gap-8 md:mt-[-10svh]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl">Hello, I&apos;m Rafael Diaz</h1>
          <p className="md:text-xl">
            Prev. Software Engineering Intern at Newmark
          </p>
        </div>
        <Link href="/resume">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-500 md:text-lg"
          >
            View Resume
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
