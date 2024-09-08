import BentoGrid from "@/components/grids/bento-grid";

const projects = [
  {
    name: "Project 1",
    image: "/next.svg",
    category: "Web",
    link: "#"
  },
  {
    name: "Project 2",
    image: "/next.svg",
    category: "Data",
    link: "#"
  },
  {
    name: "Project 3",
    image: "/next.svg",
    category: "Data",
    link: "#"
  },
  {
    name: "Project 4",
    image: "/next.svg",
    category: "Programming",
    link: "#"
  },
];

export default function ProjectsPage() {
    return (
      <BentoGrid projects={projects}/>
    );
  }