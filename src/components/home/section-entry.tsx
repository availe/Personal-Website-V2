import Link from 'next/link';
import ExperienceEntry from './experience-entry';

interface Experience {
  companyLink: string;
  companyName: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const SectionEntry: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl ml-2">Experience</h2>

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
      <div className="flex justify-center">
        <p className="text-center hover:border-b inline-block">
          <Link href="/resume">See all</Link>
        </p>
      </div>
    </section>
  );
};

export default SectionEntry;
