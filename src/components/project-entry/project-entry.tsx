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
    className="container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center"
  >
    {imageLeft ? (
      <>
        <ImageSection src={imageSrc} alt={imageAlt} />
        <TextSection
          title={projectName}
          description={projectDescription}
          details={projectDetails}
          codeUrl={codeUrl}
          isInternal={isInternal}
        />
      </>
    ) : (
      <>
        <TextSection
          title={projectName}
          description={projectDescription}
          details={projectDetails}
          codeUrl={codeUrl}
          isInternal={isInternal}
        />
        <ImageSection src={imageSrc} alt={imageAlt} />
      </>
    )}
  </section>
);

export default ProjectEntry;
