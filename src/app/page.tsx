import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center">
        <div className="uppercase">Hello, I'm Rafael Diaz</div>
        <div>Prev. Software Engineering Intern at Newmark</div>
        <Link href="/about">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About Me
        </button>
        </Link>
      </section>
    </main>
  );
}
