import React from "react";
import { Button } from "../ui/button";

interface Project {
  name: string;
  image: string;
  category: string;
  link: string;
}

interface BentoGridProps {
  projects: Project[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ projects = [] }) => {
  return (
    <section className="flex flex-col">
      {projects.map((project) => (
        <Button key={project.name} variant="outline">
          {project.category}
        </Button>
      ))}
    </section>
  );
};

export default BentoGrid;
