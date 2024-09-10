import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectEntryProps {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectDetails: string[];
  codeUrl?: string;
  imageLeft?: boolean;
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

const TextSection = ({
  title,
  description,
  details,
  codeUrl,
}: {
  title: string;
  description: string;
  details: string[];
  codeUrl?: string;
}) => (
  <div className="w-full lg:w-1/2">
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </CardContent>
      {codeUrl && (
        <CardFooter>
          <a
            href={codeUrl}
            className="text-center text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out"
            rel="noopener noreferrer"
          >
            View Code
          </a>
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
      />
    </section>
  </div>
);

export default ProjectEntry;
