import SectionEntry from "@/components/home/section-entry";
import Hero from "@/components/home/hero";
import { Separator } from "@radix-ui/react-separator";
import { experiences, projects } from "@/data/txt/home-data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Hero />
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:mx-12 gap-6 lg:gap-12">
          <Separator orientation="vertical" />
          <SectionEntry
            experiences={projects}
            title="Projects"
            stringDesc="View Projects"
            stringLink="/projects"
            callToAction="View Project"
          />
          <Separator orientation="vertical" />
          <SectionEntry
            experiences={experiences}
            title="Experience"
            stringDesc="View Resume"
            stringLink="/resume"
            callToAction="View Company"
          />
          <Separator orientation="vertical" />
        </div>
      </div>
    </>
  );
}
