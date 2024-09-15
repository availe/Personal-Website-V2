import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const navDict = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  { href: "/resume", text: "Resume" },
];

const socialDict = [
  {
    href: "https://www.linkedin.com/in/rafael-diaz1/",
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/availe",
    icon: GitHubLogoIcon,
    label: "GitHub",
  },
];

export { navDict, socialDict };