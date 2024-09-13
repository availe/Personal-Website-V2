import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { callToActionLink } from "./call-to-action-link";

interface TextSectionProps {
  title: string;
  description: string;
  details: string[];
  codeUrl: string;
  isInternal: boolean;
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  description,
  details,
  codeUrl,
  isInternal,
}) => (
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
);
