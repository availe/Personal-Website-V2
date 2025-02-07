interface ProjectData {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectUrlName: string;
  projectDescription: string;
  projectDetails: string[];
  codeUrl: string;
  isInternal: boolean;
}

const ProjectsData: ProjectData[] = [
  {
    imageSrc: "/Resume-Builder-V2.png",
    imageAlt: "Screenshot of Resume Builder.",
    projectName: "Resume Builder V2",
    projectUrlName: "resume-builder-v2",
    projectDescription: "Build professional Latex resumes with JSON.",
    projectDetails: [
      "Improved resume builder with new GUI.",
      "Client-side instead of server-side processing.",
      "Temporary description while site revamp.",
    ],
    codeUrl: "https://resume-builder.availe.io",
    isInternal: false,
  },
  {
    imageSrc: "/resume-builder.webp",
    imageAlt: "Screenshot of Resume Builder.",
    projectName: "PyTex Resume Builder - Desktop Only",
    projectUrlName: "resume-builder",
    projectDescription: "Build professional Latex resumes with JSON.",
    projectDetails: [
      "Created a web tool to generate professional LaTeX resumes from structured JSON input.",
      "Real time processing of JSON inputs, allowing you to view resume as you build it.",
      "Major updates planned for future.",
    ],
    codeUrl: "/projects/resume-builder",
    isInternal: true,
  },
  {
    imageSrc: "/escape-mockup.webp",
    imageAlt: "Screenshot of Escape.",
    projectName: "Escape - Desktop Only",
    projectUrlName: "escape-project",
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
    projectUrlName: "expense-tracker-project",
    projectDescription: "A tool to manage and track corporate expenses.",
    projectDetails: [
      "JavaFX full-stack app simulating corporate expenses, supporting multiple user roles.",
      "User data and expenses are stored in a SQLite database, with a Maven-managed build configuration.",
    ],
    codeUrl: "https://github.com/availe/Expense-Tracker",
    isInternal: false,
  },
];

export default ProjectsData;
