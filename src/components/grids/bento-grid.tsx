import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

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
  const uniqueCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return (
    <section className="flex flex-col">
      <div className="flex justify-center gap-6">
        {uniqueCategories.map((category) => (
          <Button key={category} variant="outline">
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-4">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>More about {project.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.image}
                alt={project.name}
                style={{ width: "100%" }}
              />
              <p>{project.category}</p>
            </CardContent>
            <CardFooter>
              <a href={project.link}>Learn More</a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
