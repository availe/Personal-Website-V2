import SectionEntry from "@/components/home/section-entry";
import Hero from "@/components/home/hero";
import { experiences, projects } from "@/data/txt/home-data";

export default function Home() {
  return (
    <>
      <div className="grid grid-flow-row gap-6">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 lg:mx-24">
          <SectionEntry
            experiences={projects}
            title="Projects"
            stringDesc="View Projects"
            stringLink="/projects"
            callToAction="View Project"
          />
          <SectionEntry
            experiences={experiences}
            title="Experience"
            stringDesc="View Resume"
            stringLink="/resume"
            callToAction="View Company"
          />
        </div>
      </div>
    </>
  );
}
