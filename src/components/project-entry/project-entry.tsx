import { ImageSection } from "./image-section";
import { ProjectEntryProps } from "./project-entry-props";
import { TextSection } from "./text-section";

const ProjectEntry: React.FC<ProjectEntryProps> = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectDetails,
  codeUrl,
  isInternal,
}) => (
  <section
    aria-labelledby="project-title"
    className="container mx-auto flex flex-col lg:flex-row justify-center items-center"
  >
    <ImageSection src={imageSrc} alt={imageAlt} />
    <TextSection
      title={projectName}
      description={projectDescription}
      details={projectDetails}
      codeUrl={codeUrl}
      isInternal={isInternal}
    />
  </section>
);

export default ProjectEntry;
