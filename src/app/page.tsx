import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh bg-[url('/flat-mountains.svg')] bg-cover bg-center flex flex-col justify-center">
        <section className="text-center flex flex-col gap-6 md:gap-8 md:mt-[-10dvh]">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-3xl md:text-5xl">
              Hello, I&apos;m Rafael Diaz
            </h1>
            <p className="md:text-xl">
              Prev. Software Engineering Intern at Newmark
            </p>
          </div>
          <Link href="/about">
            <button className="bg-blue-600 hover:bg-blue-500 text-white md:text-xl font-semibold py-2 px-4 rounded">
              About Me
            </button>
          </Link>
        </section>
      </main>

      <section>
        <h2 className="text-2xl md:text-3xl">Experience</h2>

        <div className="flex justify-evenly">
          <div>
            <h2 className="text-2xl md:text-3xl">Newmark</h2>
            Software Engineer Intern, Summer 2024
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl">Innovare</h2>
            Linux Technician Intern, Fall 2023 
          </div>
        </div>
        <p className="text-center">See all</p>
      </section>
    </>
  );
}
