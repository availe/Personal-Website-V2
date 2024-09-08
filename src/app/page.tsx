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
    link: "https://www.nmrk.com",
    name: "Newmark",
    role: "Software Engineer Intern",
    period: "Summer 2024",
    description: "Angular and .NET Full Stack Web Development",
  },
  {
    link: "https://www.innovare.pe",
    name: "Innovare",
    role: "Linux Technician Intern",
    period: "Fall 2023",
    description: "Linux Configuration and C++ Automation",
    callToAction: "View Company",
  },
];

const projects = [
  {
    link: "https://github.com/availe/",
    name: "Escape",
    role: "Game Jam Submission",
    period: "Winter 2024",
    description: "Desktop-only platformer developed with Godot",
  },
  {
    link: "https://github.com/availe/Expense-Tracker",
    name: "Expense Tracker",
    role: "Capstone Project",
    period: "Fall 2023",
    description: "JavaFX Application with Sqlite Database",
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
          stringDesc="View Resume"
          stringLink="/resume"
          callToAction="View Company"
        />
        <SectionEntry
          experiences={projects}
          title="Projects"
          stringDesc="View Projects"
          stringLink="/projects"
          callToAction="View Project"
        />
      </div>
    </>
  );
}
