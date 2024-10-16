import Link from "next/link";
import ExperienceEntry from "./experience-entry";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";

interface Experience {
  link: string;
  name: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  title: string;
  stringDesc: string;
  stringLink: string;
  callToAction: string;
}

const SectionEntry: React.FC<ExperienceSectionProps> = ({
  experiences,
  title,
  stringDesc,
  stringLink,
  callToAction,
}) => {
  return (
    <Card className="grid grid-flow-row w-full lg:border-none lg:shadow-none">
      <CardHeader>
        <h2 className="text-3xl lg:text-center pt-4 pb-2">{title}</h2>
      </CardHeader>
      <CardContent className="grid grid-flow-row text-center md:text-start gap-12">
        {experiences.map((exp, index) => (
          <ExperienceEntry
            key={index}
            link={exp.link}
            name={exp.name}
            role={exp.role}
            period={exp.period}
            description={exp.description}
            callToAction={callToAction}
          />
        ))}
      </CardContent>
      <CardFooter className="flex justify-center pt-4">
        <span className="text-center text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out">
          <Link href={stringLink}>{stringDesc}</Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default SectionEntry;
