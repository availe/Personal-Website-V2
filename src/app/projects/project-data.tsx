interface ProjectData {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectDetails: string[];
  codeUrl?: string;
}

const ProjectsData: ProjectData[] = [
  {
    imageSrc: "/expense-tracker-mockup.svg",
    imageAlt: "Expense Tracker Mockup",
    projectName: "Expense Tracker",
    projectDescription:
      "Project Overview",
    projectDetails: [
      "My college's closest equivalent to a capstone project was the software engineering course, where over the course of a semester we had to plan and build out a full-stack application.",
      "Up to that point, I had only built one major project, a JavaFX app whose bugginess left much to be desired. Nonetheless, I decided to try again and lean into my then-fresh JavaFX experience.",
      "The goal of the project was to build an expense tracker with multi-user support. Part of the issue was data persistence, and to resolve this I set up a SQLite backend. Inspired by my experience with Linux, I centered the multi-user system around a single root user, who could authorize managers or individual users.",
    ],
    codeUrl: "/resume",
  },
  {
    imageSrc: "/expense-tracker-mockup.svg",
    imageAlt: "Expense Tracker Mockup",
    projectName: "Expense Tracker",
    projectDescription:
      "Project Overview",
    projectDetails: [
      "My college's closest equivalent to a capstone project was the software engineering course, where over the course of a semester we had to plan and build out a full-stack application.",
      "Up to that point, I had only built one major project, a JavaFX app whose bugginess left much to be desired. Nonetheless, I decided to try again and lean into my then-fresh JavaFX experience.",
      "The goal of the project was to build an expense tracker with multi-user support. Part of the issue was data persistence, and to resolve this I set up a SQLite backend. Inspired by my experience with Linux, I centered the multi-user system around a single root user, who could authorize managers or individual users.",
    ],
    codeUrl: "/resume",
  },
  {
    imageSrc: "/expense-tracker-mockup.svg",
    imageAlt: "Expense Tracker Mockup",
    projectName: "Expense Tracker",
    projectDescription:
      "Project Overview",
    projectDetails: [
      "My college's closest equivalent to a capstone project was the software engineering course, where over the course of a semester we had to plan and build out a full-stack application.",
      "Up to that point, I had only built one major project, a JavaFX app whose bugginess left much to be desired. Nonetheless, I decided to try again and lean into my then-fresh JavaFX experience.",
      "The goal of the project was to build an expense tracker with multi-user support. Part of the issue was data persistence, and to resolve this I set up a SQLite backend. Inspired by my experience with Linux, I centered the multi-user system around a single root user, who could authorize managers or individual users.",
    ],
    codeUrl: "/resume",
  },
];

export default ProjectsData;
