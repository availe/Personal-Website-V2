import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-red-200 flex flex-col justify-center bg-[url('/flat-mountains.svg')] bg-no-repeat bg-center bg-cover">
      <section className="text-center flex flex-col gap-4">
        <div className="flex flex-col gap-2">
        <div className="uppercase">Hello, I'm Rafael Diaz</div>
        <div>Prev. Software Engineering Intern at Newmark</div>
        </div>
        <Link href="/about">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About Me
        </button>
        </Link>
      </section>
    </main>
  );
}
