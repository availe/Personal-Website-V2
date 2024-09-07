import Link from "next/link";
import ExperienceEntry from "./experience-entry";

interface Experience {
  companyLink: string;
  companyName: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  title: string;
  stringDesc: string;
  stringLink: string;
}

const SectionEntry: React.FC<ExperienceSectionProps> = ({
  experiences,
  title,
  stringDesc,
  stringLink,
}) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl ml-2 pb-4">{title}</h2>

      <div className="flex flex-col md:flex-row justify-evenly text-center md:text-start gap-16 md:gap-0">
        {experiences.map((exp, index) => (
          <ExperienceEntry
            key={index}
            companyLink={exp.companyLink}
            companyName={exp.companyName}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
      <div className="flex justify-center pt-12">
        <p className="text-center inline-block text-[#ec6240] hover:bg-[#ec6240] hover:text-white border-2 border-transparent hover:border-[#ec6240] px-4 py-2 rounded-lg transition-colors duration-100 ease-in-out">
          <Link href={stringLink}>{stringDesc}</Link>
        </p>
      </div>
    </section>
  );
};

export default SectionEntry;
