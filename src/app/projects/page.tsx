import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex w-full justify-center p-4">
        <h2 className="text-2xl">Projects</h2>
      </CardHeader>
      <CardContent className="flex">
        <div className="w-1/2 flex justify-center">
          <figure>
            <Image
              src="/expense-tracker-mockup.svg"
              alt="Expense Tracker Mockup"
              width="572"
              height="272"
              style={{ objectFit: "contain" }}
            />
            <figcaption className="text-center mt-2">
              Figma mockup of project
            </figcaption>
          </figure>
        </div>
        <div className="w-1/2 flex flex-col p-4">
          <h2 className="text-2xl">Expense Tracker</h2>
          <p>Details.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-4">
        <p>Link.</p>
      </CardFooter>
    </Card>
  );
}
