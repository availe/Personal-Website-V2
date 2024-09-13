import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ProjectEntryProps {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectDetails: string[];
  codeUrl: string;
  imageLeft: boolean;
  isInternal: boolean;
}

const ImageSection = ({
  src,
  alt,
  imageLeft,
}: {
  src: string;
  alt: string;
  imageLeft: boolean;
}) => (
  <div
    className={`flex justify-center items-center p-8 ${
      imageLeft ? "lg:order-1" : "lg:order-2"
    }`}
    style={{ maxWidth: "600px", width: "100%" }}
  >
    <figure className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={572}
        height={272}
        style={{ objectFit: "contain" }}
      />
      <figcaption className="text-center mt-2">{alt}</figcaption>
    </figure>
  </div>
);

const callToActionLink = (isInternal: boolean, codeUrl: string) => {
  const linkClass =
    "text-center text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out";

  return isInternal ? (
    <Link href={codeUrl} passHref>
      <span className={linkClass}>View Project</span>
    </Link>
  ) : (
    <a
      href={codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      View Code in GitHub
    </a>
  );
};

const TextSection = ({
  title,
  description,
  details,
  codeUrl,
  isInternal,
}: {
  title: string;
  description: string;
  details: string[];
  codeUrl: string;
  isInternal: boolean;
}) => (
  <div
    className={`flex justify-center items-center p-8`}
    style={{ maxWidth: "600px", width: "100%" }}
  >
    <Card className="flex flex-col w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 grid grid-flow-row gap-3">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </CardContent>
      {codeUrl && (
        <CardFooter className="flex justify-center lg:justify-end">
          {callToActionLink(isInternal, codeUrl)}
        </CardFooter>
      )}
    </Card>
  </div>
);

const ProjectEntry: React.FC<ProjectEntryProps> = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectDetails,
  codeUrl,
  imageLeft = true,
  isInternal,
}) => (
  <div className="container mx-auto flex justify-center">
    <section
      aria-labelledby="project-title"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
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
  </div>
);

export default ProjectEntry;
