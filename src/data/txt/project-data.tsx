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
    imageAlt: "Screenshot of Escape.",
    projectName: "Escape - Desktop Only",
    projectDescription: "Built using the Godot Engine.",
    projectDetails: [
      "2D desktop-only platformer; avoid getting pushed out of the arena by the monsters. Prototype game jam entry. A remastered version is planned for release at the subsequent jam.",
      "Navigate with WASD or arrow keys. Jump with 'up', fast drop with 'down.' Additionally, hold 'shift' while touching the ground to mega-jump.",
      "No win/lose condition. If you're pushed out of the arena restart the game by refreshing the tab.",
    ],
    codeUrl: "/projects/escape",
    isInternal: true,
  },
  {
    imageSrc: "/expense-tracker-mockup.svg",
    imageAlt: "Expense Tracker Mockup.",
    projectName: "Expense Tracker",
    projectDescription: "A tool to manage and track corporate expenses.",
    projectDetails: [
      "JavaFX full-stack app simulating corporate expenses, supporting multiple user roles.",
      "User data and expenses are stored in a SQLite database, with a Maven-managed JavaFX environment.",
    ],
    codeUrl: "https://github.com/availe/Expense-Tracker",
    isInternal: false,
  },
];

export default ProjectsData;
