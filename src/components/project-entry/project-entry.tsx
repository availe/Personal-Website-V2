import { ImageSection } from "./image-section";
import { ProjectEntryProps } from "./project-entry-props";
import { TextSection } from "./text-section";

const ProjectEntry: React.FC<ProjectEntryProps> = ({
  imageSrc,
  imageAlt,
  projectName,
  projectUrlName,
  projectDescription,
  projectDetails,
  codeUrl,
  isInternal,
  preload
}) => (
  <section
    aria-labelledby="project-title"
    className="container mx-auto flex flex-col lg:flex-row justify-center items-center scroll-mt-[55px]"
    id={projectUrlName}
  >
    <ImageSection src={imageSrc} alt={imageAlt} preload={preload} />
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
