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

const ImageSection = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full lg:w-1/2 flex justify-center p-8">
    <figure className="flex flex-col justify-center items-center">
      <Image
        src={src}
        alt={alt}
        width="572"
        height="272"
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
      <span className={linkClass}>View Code</span>
    </Link>
  ) : (
    <a
      href={codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      View Code
    </a>
  );
};

const TextSection = ({
  title,
  description,
  details,
  codeUrl,
  isInternal,
  imageLeft,
}: {
  title: string;
  description: string;
  details: string[];
  codeUrl: string;
  isInternal: boolean;
  imageLeft: boolean;
}) => (
  <div className="w-full lg:w-1/2 lg:pt-8">
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </CardContent>
      {codeUrl && (
        <CardFooter className={`flex ${imageLeft ? "" : "lg:flex-row-reverse"}`}>
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
  <div className="flex flex-col container mx-auto">
    <section
      aria-labelledby="project-title"
      className={`flex flex-col lg:flex-row w-full ${
        imageLeft ? "" : "lg:flex-row-reverse"
      }`}
    >
      <ImageSection src={imageSrc} alt={imageAlt} />
      <TextSection
        title={projectName}
        description={projectDescription}
        details={projectDetails}
        codeUrl={codeUrl}
        isInternal={isInternal}
        imageLeft={imageLeft}
      />
    </section>
  </div>
);

export default ProjectEntry;
