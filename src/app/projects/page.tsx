import ProjectEntry from "@/components/project-entry/project-entry";
import ProjectsData from "@/data/txt/project-data";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto flex">
      <div className="w-[10%]">
      {ProjectsData.map((project, index) => (
        <ProjectEntry key={index} {...project} preload={index < 2} />
      ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
