import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface NavbarSocialListItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  onItemClick?: () => void;
}

const NavbarSocialListItem = ({
  href,
  icon: Icon,
  label,
  onItemClick,
}: NavbarSocialListItemProps) => {
  const itemClass = `flex ml-10 gap-1 hover:border-b`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex ml-10 gap-1 hover:border-b"
      onClick={onItemClick}
    >
      <Icon className="w-8 h-8" />
      <span>{label}</span>
    </a>
  );
};

export default NavbarSocialListItem;
