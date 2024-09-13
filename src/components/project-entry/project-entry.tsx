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
  imageLeft,
  isInternal,
}) => (
  <section
    aria-labelledby="project-title"
    className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center ${
      imageLeft ? "lg:order-1" : "lg:order-2"
    }`}
  >
    <ImageSection src={imageSrc} alt={imageAlt} imageLeft={imageLeft} />
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
