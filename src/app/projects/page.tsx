import ProjectEntry from "@/components/project-entry/project-entry";
import ProjectsData from "@/data/tsx/project-data";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-12 pt-2">
      {ProjectsData.map((project, index) => (
        <ProjectEntry key={index} {...project} preload={index < 2} />
      ))}
    </div>
  );
};

export default ProjectsPage;