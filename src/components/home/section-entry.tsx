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
    <Card className="md:ml-10 md:mr-10">
      <CardHeader>
        <h2 className="text-2xl md:text-3xl">{title}</h2>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-evenly">
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
      <CardFooter className="flex justify-center">
        <p className="text-center inline-block text-[#ec6240] hover:bg-[#ec6240] hover:text-white border-2 border-transparent hover:border-[#ec6240] px-4 py-2 rounded-lg transition-colors duration-100 ease-in-out">
          <Link href={stringLink}>{stringDesc}</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SectionEntry;
