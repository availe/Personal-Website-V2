interface ProjectData {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectDetails: string[];
  codeUrl: string;
  isInternal: boolean;
}

const ProjectsData: ProjectData[] = [
  {
    imageSrc: "/escape-mockup.webp",
    imageAlt: "Expense Tracker Mockup",
    projectName: "Escape - Desktop Only",
    projectDescription:
      "Godot Engine",
    projectDetails: [
      "Escape is a desktop-only 2D platformer game jam submission. The goal is to not be pushed out of the arena by the monster following you.",
      "Use the WASD or arrow keys to move. The up key lets you jump or double jump, whereas the down key makes you fall quickly. Pressing the shift key while on the ground allows you mega-jump.",
    ],
    codeUrl: "/resume",
    isInternal: true,
  },
  {
    imageSrc: "/expense-tracker-mockup.svg",
    imageAlt: "Expense Tracker Mockup",
    projectName: "Expense Tracker",
    projectDescription:
      "Project Overview",
    projectDetails: [
      "The Expense Tracker is a full-stack JavaFX that allows users to simulate corporate expenses. The app supports multiple users, with a root user who can authorize managers or individual users.",
      "A SQLite database stores user information and expenses, while a Maven project structure automatically manages dependencies including JavaFX installation. The UI itself is provided via JavaFX.",
    ],
    codeUrl: "https://github.com/availe/Expense-Tracker",
    isInternal: false,
  },
];

export default ProjectsData;
