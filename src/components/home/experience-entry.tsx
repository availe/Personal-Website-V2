import { Button } from "../ui/button";

interface ExperienceEntryProps {
  link: string;
  name: string;
  role: string;
  period: string;
  description: string;
  callToAction: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  link,
  name,
  role,
  period,
  description,
  callToAction,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-2xl md:text-3xl inline-block">{name}</h2>
        <p className="text-[#757775]">
          {role}, {period}
        </p>
      </div>
      <p>{description}</p>
      <div className="flex justify-center md:justify-end pt-2">
        <Button variant="outline">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {callToAction}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceEntry;
