import ProjectEntry from "@/components/project/project-entry";
import ProjectsData from "./project-data";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-48 pt-12">
      {Object.entries(ProjectsData).map(([key, project], index) => (
        <ProjectEntry key={key} {...project} imageLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default ProjectsPage;
