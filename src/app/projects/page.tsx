import ProjectEntry from "@/components/project-entry.tsx/project-entry";
import ProjectsData from "../../data/txt/project-data";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto grid grid-flow-row gap-48 pt-12">
      {Object.entries(ProjectsData).map(([key, project], index) => (
        <ProjectEntry key={key} {...project} imageLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default ProjectsPage;
