interface ExperienceEntryProps {
  companyLink: string;
  companyName: string;
  role: string;
  period: string;
  description: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  companyLink,
  companyName,
  role,
  period,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2">
        <div>
      <h2 className="text-2xl md:text-3xl hover:border-b inline-block">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </h2>
    <p className="text-[#757775]">
      {role}, {period}
    </p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceEntry;
