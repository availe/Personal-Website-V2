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
import ExperienceEntry from "@/components/home/experience-entry";
import SectionEntry from "@/components/home/section-entry";
import Hero from "@/components/home/hero";

const experiences = [
  {
    companyLink: "https://www.nmrk.com",
    companyName: "Newmark",
    role: "Software Engineer Intern",
    period: "Summer 2024",
    description: "Angular and .NET Full Stack Web Development",
  },
  {
    companyLink: "https://www.innovare.pe",
    companyName: "Innovare",
    role: "Linux Technician Intern",
    period: "Fall 2023",
    description: "Linux Task Configuration and Automation",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-20 pt-20">
        <SectionEntry
          experiences={experiences}
          title="Experience"
          stringDesc="View Full Resume"
          stringLink="/resume"
        />
        <SectionEntry
          experiences={experiences}
          title="Projects"
          stringDesc="View All Projects"
          stringLink="/projects"
        />
      </div>
    </>
  );
}
