import ProjectEntry from "@/components/project-entry/project-entry";
import ProjectsData from "@/data/txt/project-data";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto grid grid-flow-row gap-12">
      {ProjectsData.map((project, index) => (
        <ProjectEntry key={index} {...project} imageLeft={false} />
      ))}
    </div>
  );
};

export default ProjectsPage;
