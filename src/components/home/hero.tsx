import Link from "next/link";

const Hero = () => {
  return (
    <main className="min-h-svh bg-[url('/flat-mountains.svg')] bg-cover bg-center flex flex-col justify-center">
      <section className="text-center flex flex-col gap-6 md:gap-8 md:mt-[-10svh]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl">Hello, I&apos;m Rafael Diaz</h1>
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
  );
};

export default Hero;
